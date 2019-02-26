<template>
  <div class="container">
    <v-breadcrumbs :items="breadcrumbItems" divider=">"></v-breadcrumbs>

    <v-toolbar
      color="cyan"
      dark
      tabs
    >

      <v-toolbar-title>İletişim</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tabs
        slot="extension"
        v-model="tab"
        color="cyan"
        grow
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="itemsSelect"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>


  </div>

</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, maxLength, email } from 'vuelidate/lib/validators';
  export default {
    name: 'Contact',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked(val) {
          return val;
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      itemsSelect: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      breadcrumbItems: [
        {
          text: 'Anasayfa',
          disabled: false,
          href: '/'
        },
        {
          text: 'İletişim',
          disabled: true,
          href: '/iletisim'
        },
      ],
    }),

    computed: {
      checkboxErrors() {
        const errors = [];
        if (!this.$v.checkbox.$dirty) return errors;
        !this.$v.checkbox.checked && errors.push('You must agree to continue!');
        return errors;
      },
      selectErrors() {
        const errors = [];
        if (!this.$v.select.$dirty) return errors;
        !this.$v.select.required && errors.push('Item is required');
        return errors;
      },
      nameErrors() {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
        !this.$v.name.required && errors.push('Name is required.');
        return errors;
      },
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push('Must be valid e-mail');
        !this.$v.email.required && errors.push('E-mail is required');
        return errors;
      },
    },

    methods: {
      submit() {
        this.$v.$touch();
      },
      clear() {
        this.$v.$reset();
        this.name = '';
        this.email = '';
        this.select = null;
        this.checkbox = false;
      },
    },
  };
</script>

<style scoped>

</style>
