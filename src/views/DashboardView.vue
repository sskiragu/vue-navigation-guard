<template>
    <v-layout>
        <v-app-bar title="Bank App"></v-app-bar>
        <v-navigation-drawer permanent>
            <v-list>
                <v-list-item title="Dashboard" prepend-icon="mdi-home" value="profile" style="text-align: left;"></v-list-item>
                <v-list-item title="Profile" prepend-icon="mdi-account" value="profile" style="text-align: left;"></v-list-item>
                <v-list-item title="Statements" prepend-icon="mdi-book" value="profile" style="text-align: left;"></v-list-item>
                <v-list-item title="Reports" prepend-icon="mdi-chart-line" value="profile" style="text-align: left;"></v-list-item>
                <v-list-item title="Logout" prepend-icon="mdi-logout" value="profile" style="text-align: left;"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>Main content</v-main>
    </v-layout>
</template>