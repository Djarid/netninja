<template>
    <div class="dashboard">
        <v-subheading class="grey--text">Dashboard</v-subheading>
        <v-container  class="my-15">
            <v-layout row>
                <v-flex xs12 md6 >                
                    <v-btn outlined block color="primary">1</v-btn>
                </v-flex>
                <v-flex xs4 md2 v-for="size in [2,3,4]" :key="size">
                    <v-btn outlined block color="primary">{{size}}</v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-space-around>
                <v-flex xs4 md3 v-for="size in [1,2]" :key="size">
                    <v-btn outlined block color="success">{{size}}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>