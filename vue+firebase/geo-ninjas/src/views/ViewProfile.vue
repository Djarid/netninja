<template>
    <div v-if="profile" class="view-profile container">
        <div class="card">
            <h2 class="deep-purple-text center">{{profile.alias}}'s Wall</h2>
            <UserWall :profile="profile" :user="user" />
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import UserWall from '@/components/UserWall'

export default {
    name: 'ViewProfle',
    components: {
        UserWall
    },
    data() {
        return {
            profile: null,
            newComment: null,
            user: null,
            feedback: null,
            comments: []
        }
    },
    created() {
        let ref = db.collection('users')

        // get current user
        ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.user = doc.data()
                this.user.id = doc.id
            })
        }).catch(err => {
            console.log(err)
        })

        // profile data
        ref.doc(this.$route.params.id).get()
        .then(user => {
            this.profile = user.data()
        })

        // // get comments
        // db.collection('comments').where('to', '==', this.$route.params.id)
        // .onSnapshot((snapshot) => {
        //     snapshot.docChanges().forEach(change => {
        //         if (change.type == 'added') {
        //             let data = change.doc.data()
        //             this.comments.unshift({
        //                 from: data.from,
        //                 content: data.content
        //             })
        //         }
        //     })
        // })
    },
    methods: {
        // addComment() {
        //     if (this.newComment) {
        //         this.feedback = null
        //         db.collection('comments').add({
        //             from: this.user.alias,
        //             to: this.$route.params.id,
        //             content: this.newComment,
        //             time: Date.now()
        //         }).then(() => {
        //             this.newComment = null
        //         }).catch((err) => {
        //             console.log(err)
        //         })
        //     } else {
        //         thios.feedback = "You can't post an empty comment"
        //     }
        // }
    }
}
</script>

<style>
.view-profile .card {
    padding: 20px;
    margin-top: 60px;
}
.view-profile h2 {
    font-size: 2em;
    margin-top: 0;
}
.view-profile li {
    padding: 10px;
    border-bottom: 1px solid #eee ;
}

</style>