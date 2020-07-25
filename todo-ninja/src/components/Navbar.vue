<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn text slot="activator" color="grey" v-bind="attrs" v-on="on">
                        <v-icon>mdi-expand-more</v-icon>
                        <div>Menu</div>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn depressed color="grey lighten-4">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app class="primary" v-model="drawer">
            <v-row row justify="center" class="mt-5">
                <v-avatar size="100">
                    <img src="/avatar-1.png" alt="">
                </v-avatar>                
            </v-row>
            <v-row row justify="center">
                <p class="white--text subheading mt-1">The Net Ninja</p>
            </v-row>

            <!-- Popup button -->
            <v-row row justify="center">
                <Popup></Popup>
            </v-row>

            <v-list>
                <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                        
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from '@/components/Popup'

export default {
    name: 'Navbar',
    props: ['one'],
    components: {
        Popup
    },
    data() {
        return {
            drawer: true,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: {name: 'dashboard'}},
                { icon: 'mdi-folder', text: 'My Projects', route: {name: 'projects'}},
                { icon: 'mdi-account', text: 'Team', route: {name:'team'}},
            ],
        }
    }
}
</script>