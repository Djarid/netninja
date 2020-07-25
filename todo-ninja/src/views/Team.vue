<template>
    <div class="team">
        <v-subheading class="grey--text">Team</v-subheading>
        <v-container  class="my-15">
            <v-row row wrap>
                <v-col cols="12" xs="12" md="4" lg="3" class="text-center" v-for="person in team" :key="person.name">
                    <v-card background="red" class="ma-3">
                        <v-responsive class="pt-4">
                            image here
                        </v-responsive>                        
                        <v-subheading>{{person.name}}</v-subheading>
                        <div class="grey--text">{{person.role}}</div>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        team: [
            { name: 'The Net Ninja', role: 'Web developer' },
            { name: 'Ryu', role: 'Graphic designer' },
            { name: 'Chun Li', role: 'Web developer' },
            { name: 'Gouken', role: 'Social media maverick' },
            { name: 'Yoshi', role: 'Sales guru'}
        ]
    })
}
</script>

<style>

</style>