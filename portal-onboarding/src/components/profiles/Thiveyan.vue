<template>
  <section id="thiveyan" class="min-h-screen flex items-center justify-center p-12 bg-orange-50">
    <v-card class="mx-auto" height="300" width="900" hover>
      <v-row align="center" justify="center">
        <v-col cols="3" class="d-flex align-center justify-center">
          <v-avatar size="180">
            <img src="@/assets/Thiveyan.jpeg" alt="Thiveyan">
          </v-avatar>
        </v-col>
        <v-col cols="9" class="pl-5">
          <v-card-title>
            <span class="text-3xl font-bold text-black mb-4">Thiveyan</span>
          </v-card-title>
          <v-card-text class="text-lg text-gray-800 mb-4">
            Hi, This is Thiveyan. I am a third-year student at the University of Waterloo, majoring in Stats with a CS minor. I am passionate about exploring new technologies and enjoy spending my free time playing chess and badminton.
          </v-card-text>
              <v-btn icon href="https://github.com/Thiveyan" target="_blank" class="ma-2">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon href="https://www.linkedin.com/in/Thiveyan" target="_blank" class="ma-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon href="mailto:tjegasot@uwaterloo.ca" class="ma-2">
                <v-icon>mdi-email</v-icon>
              </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Thiveyan',
};
</script>
