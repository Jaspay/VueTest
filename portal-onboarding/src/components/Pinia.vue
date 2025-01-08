<template>
    <v-container fluid class="bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      <v-card class="pa-6 mx-auto mt-8" max-width="600">
        <v-card-title class="text-h4">Pinia Test Page</v-card-title>
        <v-card-text>
          <p>This is the Pinia test page content.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="$router.push('/')" color="primary">Back Home</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>