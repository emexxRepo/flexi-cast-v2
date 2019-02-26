<template>
  <div id="app">
    <vcl-instagram v-if="isDocumentReady">
    </vcl-instagram>
    <Navbar></Navbar>

    <router-view/>
    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import {  VclInstagram } from 'vue-content-loading';

const $ = require('jquery');

export default {
  name: 'App',
  data() {
    return {
      isDocumentReady: true,
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    };
  },
  created() {
    this.isDocumentReady = false;
  },
  components: {
    Navbar,
    VclInstagram,
  },
};

</script>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
<style lang="css">
  @import '~vuetify/dist/vuetify.min.css';
</style>
