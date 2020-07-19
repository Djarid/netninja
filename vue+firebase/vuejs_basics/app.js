new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: "Ryu"
    },
    methods: {
        updateName(e) {
            // console.log(e.target.value)
            if (e.target.value == "") {
                this.name = "Ryu"
            } else {
                this.name = e.target.value
            }
            
        }
    }
})