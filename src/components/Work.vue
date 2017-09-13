<template>
  <div>
    <h2>Work</h2>
    <h1 v-if="$route.params.client">
      {{ $route.params.client }}
    </h1>
    <ul id="work">
      <li v-for="work in works">
        <router-link :to="'/work/' + work.key">
          {{ work.name }}
          <img v-bind:src="work.thumbnail" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      works: [
        {
          name: 'Monegraph',
          key: 'monegraph',
          thumbnail: require('../assets/work/monegraph.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          background_color: '#000',
          images: []
        },
        {
          name: 'Prompt Me',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          background_color: 'pink',
          images: []
        }
      ]
    }
  },
  mounted: function () {
    if (this.$route.params.client) {
      this.implementWorkStyles()
    }
  },
  methods: {
    implementWorkStyles: function () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
