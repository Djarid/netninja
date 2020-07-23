<template>
    <div class="wall container">
        <div class="card">
            <ul class="comments collection">
                <li v-for="(comment, index) in comments" :key="index" class="comment">
                    <div class="time grey-text right top">{{comment.time.fromNow()}}</div>
                    <div class="deep-purple-text">{{comment.from}}</div>
                    <div class="grey-text text-darken-2">{{comment.content}}</div>
                    <i class="material-icons edit">edit</i>
                </li>
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
import moment from 'moment'
import db from '@/firebase/init'

export default {
    name: 'UserWall',
    props: ['profile', 'user'],
    data() {
        return {
            feedback: null,
            comments: [],
            newComment: null
        }
    },
    methods: {
        addComment() {
            if (this.newComment) {
                this.feedback = null
                db.collection('comments').add({
                    from: this.user.alias,
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
    },
    created () {
        let ref = db.collection('messages')//.orderBy('time')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == "added") {
                    let data = change.doc.data()
                    this.messages.push({
                        id: change.doc.id,
                        name: data.name,
                        content: data.content,
                        timestamp: data.timestamp
                    })
                }
            })
        })
        
        // get comments
        db.collection('comments').where('to', '==', this.$route.params.id).orderBy('time')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    let data = change.doc.data()
                    this.comments.unshift({
                        from: data.from,
                        content: data.content,
                        time: moment(data.time),
                        meta: data.meta

                    })
                }
            })
        })
        
    }
}
</script>

<style>
.wall .card {
    padding: 20px;
    margin-top: 60px;
}
.wall h2 {
    font-size: 2em;
    margin-top: 0;
}
.wall li {
    padding: 10px;
    border-bottom: 1px solid #eee ;
}

.comments {
    max-height: 300px;
    overflow: auto;
}
.comments .time {
    font-size: 0.8em;
}
.comments::-webkit-scrollbar {
    width: 3px;
}
.comments::-webkit-scrollbar-track {
    background: #dddddd
}
.comments::-webkit-scrollbar-thumb {
    background: #aaaaaa
}
.comment {
    position: relative;
}
.comment .edit {
    position: absolute;
    right: 10px;
    bottom: 8px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>