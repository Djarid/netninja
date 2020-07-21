<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends  :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    OnlineFriends,
    AllFriends
  },
  data() {
    return {
      title: 'My first Vue app, woo :)',
      friends: [
          { name: 'Mario', online: true },
          { name: 'Luigi', online: false },
          { name: 'Toad', online: true },
          { name: 'Bowser', online: false },
      ]
    }
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
