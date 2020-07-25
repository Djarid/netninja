<template>
    <div>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on, attrs}">
            <v-btn text class="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                   <v-text-field label="title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                   <v-textarea label="Description" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="success mx-0 ml-6 mt-3" @click="submit">Add project</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    </div>
</template>

<script>
export default {
    name: 'Popup',
    data: () => ({
        title: '',
        content: '',
    }),
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    }
}
</script>

<style>

</style>