<template>
    <div class="dashboard">
        <v-subheader class="grey--text">Dashboard</v-subheader>
        <v-container  class="my-15">

            <v-row row class=mb-3>
                <v-tooltip top v-for="(button, idx) in sortButtons" :key="idx">
                    <template v-slot:activator="{ on }">
                    <v-btn small text @click="sortBy(button.prop)" v-on="on">
                        <v-icon left small>{{button.icon}}</v-icon>
                        <span class="caption text-lowercase">{{button.label}}</span>
                    </v-btn>
                    </template>
                </v-tooltip>
            </v-row>

            <v-card flat tile class="px-3" v-for="project in projects" :key="project.title">
                <v-row row wrap :class="`pl-3 project ${project.status}`">
                    <v-col cols="12" xs="12" md="6">
                        <div class="caption grey--text">Project Title</div>
                        <div>{{project.title}}</div>
                    </v-col>
                    <v-col cols="6" xs="6" sm="4" md="2">
                        <div class="caption grey--text">Person</div>
                        <div>{{project.person}}</div>
                    </v-col>
                    <v-col cols="6" xs="6" sm="4" md="2">
                        <div class="caption grey--text">Due by</div>
                        <div>{{project.due}}</div>
                    </v-col>
                    <v-col cols="4" xs="4" sm="4" md="2">
                        <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
                    </v-col>
                </v-row>
            <v-divider></v-divider>
            </v-card>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data: () => ({
        projects: [
            { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ],
        sortButtons: [
            { label: 'by project name', icon: 'mdi-folder', prop: 'title' },
            { label: 'by person', icon: 'mdi-acount', prop: 'person' },
            { label: 'by due date', icon: 'mdi-calendar', prop: 'due' },
        ]
    }),
    methods: {
        sortBy(prop) {
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        },
        sortDescBy(prop) {
            this.projects.sort((a,b) => a[prop] > b[prop] ? -1 : 1)
        }
    }
}
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}
div.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}
.theme--light.v-chip.complete:not(.v-chip--active) {
    background: #3cd1c2;
}
.theme--light.v-chip.ongoing:not(.v-chip--active) {
    background: #ffaa2c;
}
.theme--light.v-chip.overdue:not(.v-chip--active) {
    background: #f83e70;
}

</style>