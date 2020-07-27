<template>
    <div>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{on, attrs}">
            <v-btn text class="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Description" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                    <v-menu>
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field v-bind="{attrs}" v-on="on" label="Due date" prepend-icon="mdi-calendar" :value="formattedDate" :rules="inputRules"></v-text-field>    
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>

                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="success mx-0 ml-6 mt-3" @click="submit" :loading="loading">Add project</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    </div>
</template>

<script>
import moment from 'moment'
// import db from '@/firebase/init'

export default {
    name: 'Popup',
    data: () => ({
        title: '',
        content: '',
        due: '',
        inputRules: [
            v => v && v.length >= 3 || 'Minimum length is 3 characters',
        ],
        loading: false,
        dialog: false,
    }),
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true
                // const project = {
                //     title: this.title,
                //     content: this.content,
                //     due: moment(this.due).format('Do MM YYYY'),
                //     person: 'The Net Ninja',
                //     status: 'ongoing'
                // }
                
                // db.collection('projects').add(project).then(() => {
                //     console.log('added to db')
                //     this.loading = false
                //     this.dialog = false
                //     this.$emit('snack-message', "Awsome! you just added a project")
                // }).catch(err => { 
                //     console.log(err.message)
                //     this.loading ('snack-message', "Oh noes! the project was not added")
                // })
                console.log("Emitting")
                this.$emit('showSnackbar')
                this.loading = false
                this.dialog = false 
                // this.title = ''
                // this.content = ''
                // this.due = ''
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? moment(this.due).format('Do MMM YYYY') : '' 
        }
    }
}
</script>

<style>

</style>