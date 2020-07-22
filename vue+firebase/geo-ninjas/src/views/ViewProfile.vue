<template>
    <div v-if="profile" class="view-profile container">
        <div class="card">
            <h2 class="deep-purple-text center">{{profile.alias}}'s Wall</h2>
            <ul class="comments collectioon">
                <li>Comment</li>
            </ul>
            <form @submit.prevent="addComment">
                <div class="field">
                    <label for="comment">Add a comment</label>
                    <input type="text" name="comment" v-model="newComment">
                    <p v-if="feedback" class="red-text">{{ feedback }}</p>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'ViewProfle',
    data() {
        return {
            profile: null,
            newComment: null,
            user: null,
            feedback: null
        }
    },
    created() {
        let ref = db.collection('users')
        ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.user = doc.data()
                this.user.id = doc.id
            })
        }).catch(err => {
            console.log(err)
        })

        ref.doc(this.$route.params.id).get()
        .then(user => {
            this.profile = user.data()
        })
    },
    methods: {
        addComment() {
            if (this.newComment) {
                this.feedback = null
                db.collection('comments').add({
                    from: this.user.id,
                    to: this.$route.params.id,
                    content: this.newComment,
                    time: Date.now()
                }).then(() => {
                    this.newComment = null
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                thios.feedback = "You can't post an empty comment"
            }
        }
    }
}
</script>

<style>

</style>