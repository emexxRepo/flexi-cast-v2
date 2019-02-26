<template>
  <div class="container">
    <v-breadcrumbs :items="breadcrumbItems" divider=">"></v-breadcrumbs>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
        </v-flex>
        <v-flex  :key="61" xs6 >
          <v-card dark color="secondary">
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>

          </v-card>
        </v-flex>
        <v-flex  :key="62" xs5 offset-xs1>
          <v-card  color="secondary">
            <h1>Hakkımızda</h1>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio ducimus eum impedit placeat quidem repellat veniam? Aliquam atque corporis doloribus eaque eligendi eos, hic impedit ipsum quibusdam vitae voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at corporis est nulla rerum? Ab accusamus architecto assumenda, blanditiis dignissimos, enim est expedita iste iure laboriosam praesentium provident quos repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet asperiores aut consequuntur facilis iure nihil officiis optio placeat recusandae, reiciendis tempora tenetur unde voluptates! Iste magnam ullam veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste modi molestiae non. Consectetur cumque dolor placeat quam quia ratione temporibus ullam veritatis. Accusamus consequuntur, esse explicabo labore molestias rerum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ex labore natus neque odio rem sapiente voluptatem? Expedita nulla quidem repudiandae. Aperiam cum dignissimos eius id magni rem repudiandae tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio ducimus eum impedit placeat quidem repellat veniam? Aliquam atque corporis doloribus eaque eligendi eos, hic impedit ipsum quibusdam vitae voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at corporis est nulla rerum? Ab accusamus architecto assumenda, blanditiis dignissimos, enim est expedita iste iure laboriosam praesentium provident quos repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet asperiores aut consequuntur facilis iure nihil officiis optio placeat recusandae, reiciendis tempora tenetur unde voluptates! Iste magnam ullam veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste modi molestiae non. Consectetur cumque dolor placeat quam quia ratione temporibus ullam veritatis. Accusamus consequuntur, esse explicabo labore molestias rerum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ex labore natus neque odio rem sapiente voluptatem? Expedita nulla quidem repudiandae. Aperiam cum dignissimos eius id magni rem repudiandae tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio ducimus eum impedit placeat quidem repellat veniam? Aliquam atque corporis doloribus eaque eligendi eos, hic impedit ipsum quibusdam vitae voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at corporis est nulla rerum? Ab accusamus architecto assumenda, blanditiis dignissimos, enim est expedita iste iure laboriosam praesentium provident quos repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet asperiores aut consequuntur facilis iure nihil officiis optio placeat recusandae, reiciendis tempora tenetur unde voluptates! Iste magnam ullam veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste modi molestiae non. Consectetur cumque dolor placeat quam quia ratione temporibus ullam veritatis. Accusamus consequuntur, esse explicabo labore molestias rerum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ex labore natus neque odio rem sapiente voluptatem? Expedita nulla quidem repudiandae. Aperiam cum dignissimos eius id magni rem repudiandae tenetur?</p>

            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

export default {
  name: 'About',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Anasayfa',
          disabled: false,
          href: '/',
        },
        {
          text: 'Hakkımızda',
          disabled: true,
          href: '/hakkimizda',
        },

      ],
    };
  },
};
</script>
