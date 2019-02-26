<template>
  <div class="home">
    <carousel autoplay>
      <slide v-for="slide in slides">
        <img :src="slide" alt="" class="img-fluid">
      </slide>
    </carousel>
    <div class="container alert alert-info">
      <button type="button" class="btn btn-primary">
        Duyurular <span class="badge badge-light">4</span>
      </button>
      <marquee-text :duration="30">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna.
      </marquee-text>

    </div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-layout row>
            <v-flex xs12 sm12 md12 lg12>
              <v-card>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                  height="300px"
                >
                  <v-layout
                    column
                    fill-height
                  >
                    <v-card-title>
                      <v-btn dark icon>
                        <v-icon>chevron_left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn dark icon class="mr-3">
                        <v-icon>edit</v-icon>
                      </v-btn>

                      <v-btn dark icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-5 pt-5">
                      <div class="display-1 pl-5 pt-5">Ali Conners</div>
                    </v-card-title>
                  </v-layout>
                </v-img>

                <v-list two-line>
                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                      <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>chat</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>

                  <v-list-tile @click="">
                    <v-list-tile-action></v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                      <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>chat</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>

                  <v-divider inset></v-divider>

                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">mail</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                      <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile @click="">
                    <v-list-tile-action></v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                      <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-divider inset></v-divider>

                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">location_on</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>1400 Main Street</v-list-tile-title>
                      <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-layout row>
            <v-flex xs12 sm12 md12 lg12>
              <v-card>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                  height="300px"
                >
                  <v-layout
                    column
                    fill-height
                  >
                    <v-card-title>
                      <v-btn dark icon>
                        <v-icon>chevron_left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn dark icon class="mr-3">
                        <v-icon>edit</v-icon>
                      </v-btn>

                      <v-btn dark icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-5 pt-5">
                      <div class="display-1 pl-5 pt-5">Ali Conners</div>
                    </v-card-title>
                  </v-layout>
                </v-img>

                <v-list two-line>
                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                      <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>chat</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>

                  <v-list-tile @click="">
                    <v-list-tile-action></v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                      <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>chat</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>

                  <v-divider inset></v-divider>

                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">mail</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                      <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile @click="">
                    <v-list-tile-action></v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                      <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-divider inset></v-divider>

                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon color="indigo">location_on</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>1400 Main Street</v-list-tile-title>
                      <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div> {{ card_text }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card dark color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                <v-btn
                  :color="item.color"
                  class="mx-0"
                  outline
                >
                  Button
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-layout>


    </v-container>

  </div>
</template>
<style lang="scss">
  @import "~vue-snotify/styles/material";
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Carousel, Slide } from 'vue-carousel';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import MarqueeText from 'vue-marquee-text-component';

export default {
  name: 'home',
  data() {
    return {
      slides: [
        'https://www.w3schools.com/bootstrap/la.jpg',
        'https://www.w3schools.com/bootstrap/chicago.jpg',
        'https://www.w3schools.com/bootstrap/ny.jpg',
      ],
      cards: [
        {
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12,
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6,
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6,
        },
      ],
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    PulseLoader,
    MarqueeText,
  },
};
</script>
