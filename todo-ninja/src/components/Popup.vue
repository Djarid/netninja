<template>
    <div>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on, attrs}">
            <v-btn color="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            
        </v-card>
    </v-dialog>

    </div>
</template>

<script>
export default {
    name: 'Popup',
    data: () => ({

    })
}
</script>

<style>

</style>