<template>
    <div class="dashboard">
        <v-subheading class="grey--text">Dashboard</v-subheading>
        <v-container  class="my-15">
            <v-card flat class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <div class="caption white grey--text">Project Title</div>    
                        <div>Create a new website</div>                                        
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>The Net Ninja</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>1st Jan 2019</div>                    
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="caption grey--text">Status</div>
                        <div>ongoing</div>                    
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>