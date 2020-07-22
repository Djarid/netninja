<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-action">
            <NewMessage :name="name" />
        </div>
    </div>
</template>


<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')
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
    }
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;
    margin-right: 10px;
}
.chat .time {
    display: block;
    font-size: 1.2em;
}
</style>