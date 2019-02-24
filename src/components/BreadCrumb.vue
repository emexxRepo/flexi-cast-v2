<template>
  <d-breadcrumb :items="breadcrumbItems"/>
</template>

<script>
  export default {
    name: 'BreadCrumb',
    data () {
      return {
        breadcrumbItems: [{
          text: 'Products',
          href: '#'
        }, {
          text: 'Home',
          href: '#'
        }, {
          text: 'Lightbulbs',
          active: true
        }]
      }
    },
  };
</script>

<style scoped>

</style>
