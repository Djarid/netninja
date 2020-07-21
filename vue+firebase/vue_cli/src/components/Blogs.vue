<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs'
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle = "Amazing Blog Site"
        }
    },
    beforeCreate() {
        alert('beforeCreate hook')
    },
    created() {
        alert('created hook')
    },
    beforeMount() {
        // alert('beforeMount hook')
    },
    mounted() {
        // alert('mounted hook')
    },
    beforeUpdate() {
        alert('beforeUpdate hook')
    },
}
</script>