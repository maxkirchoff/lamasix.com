<template>
  <section>
    <div id="work-feature" v-if="$route.params.work_key">
      <div class="header-section">
        <h1>
          {{ works[$route.params.work_key].name }}
        </h1>
        <div class="hero">
          <img v-bind:src="works[$route.params.work_key].hero" />
        </div>
        <div class="description">
          <p>
            {{ works[$route.params.work_key].long_description }}
          </p>
        </div>
      </div>
      <div class="images">
        <div v-for="image in works[$route.params.work_key].images">
          <img v-bind:src="image" />
        </div>
      </div>
    </div>
    <div id="work-list">
      <h2>Work</h2>

      <ul id="work">
        <li v-for="(work, work_key) in works">
          <router-link :to="'/work/' + work_key">
            {{ work.name }}
            <img v-bind:src="work.thumbnail" />
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      works: {
        monegraph: {
          name: 'Monegraph',
          thumbnail: require('../assets/work/monegraph.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: "Art party hammock taiyaki hashtag sartorial, aesthetic cloud bread jean shorts trust fund photo booth lyft tilde fanny pack hell of. Echo park portland craft beer, green juice godard gastropub +1 bushwick marfa tote bag hoodie post-ironic jianbing glossier. Poutine selvage affogato glossier health goth. Lyft taxidermy swag, wayfarers helvetica man bun slow-carb letterpress cliche listicle lumbersexual photo booth umami. Lo-fi twee echo park, master cleanse selfies polaroid jianbing neutra live-edge schlitz chia fashion axe. Etsy stumptown mumblecore wayfarers. Ennui tilde fashion axe 8-bit vinyl cray kogi sartorial selfies, fanny pack slow-carb quinoa. Bitters intelligentsia cardigan direct trade sustainable wolf. Gluten-free 90's slow-carb pok pok mumblecore. Iceland kombucha celiac, cardigan hexagon echo park flexitarian typewriter vexillologist humblebrag marfa trust fund. Umami kogi lumbersexual, tacos af VHS enamel pin.",
          hero: require('../assets/work/monegraph-hero.png'),
          images: [
            require('../assets/work/monegraph-1.png'),
            require('../assets/work/monegraph-2.png'),
            require('../assets/work/monegraph-3.png'),
            require('../assets/work/monegraph-4.png')
          ]
        },
        gen_z_studio: {
          name: 'Gen Z Studio',
          thumbnail: '',
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          background_color: 'pink',
          images: []
        },
        prompt_me: {
          name: 'Prompt Me',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          background_color: 'pink',
          images: []
        },
        prompt_me_two: {
          name: 'Prompt Me',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          background_color: 'pink',
          images: []
        }
      }
    }
  },
  mounted: function () {
    if (this.$route.params.work_key) {
      this.addWorkStyles(this.$route.params.work_key)
    }
  },
  beforeDestroy () {
    this.removeWorkStyles()
  },
  watch: {
    '$route': function () {
      if (this.$route.params.work_key) {
        this.addWorkStyles(this.$route.params.work_key)
      } else {
        this.removeWorkStyles(this.$route.params.work_key)
      }
    }
  },
  methods: {
    addWorkStyles: function (workKey) {
      if (workKey) {
        this.addBodyTheme(workKey)
      }
    },
    removeWorkStyles: function () {
      console.log('remove stuff 2')
      this.removeBodyTheme()
    },
    addBodyTheme: function (workTheme) {
      document.body.dataset.theme = workTheme
    },
    removeBodyTheme: function () {
      console.log('remove stuff 3')
      document.body.dataset.theme = ''
    }
  }
}
</script>
<!-- Work theme styles only -->
<style>
body {
  transition: background-color 500ms, color 500ms;
}

body[data-theme="prompt_me"] {
  background-color: pink;
}

body[data-theme="monegraph"] {
  color: #fff;
  background-color: #000;
}

body[data-theme="monegraph"] .logo:not(.black) * {
  fill: #ffffff;
}

body[data-theme="monegraph"] .menu-button div {
  background: #fff;
  color: #fff;
}

body[data-theme="monegraph"] .menu-button.active div {
  background: #000;
  color: #000;
}

body[data-theme="monegraph"] nav.active a {
  color: #000;
  transition: color 1s ease-in;
}

body[data-theme="monegraph"] a {
  color: #fff;
}

body[data-theme="monegraph"] nav.active a {
  color: #000;
  transition: color 0s;
}
</style>
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

#work-feature {

}

#work-feature .hero {
  width: 30%;
  float: right;
  margin-right: 10%;
  clear:both;
}

#work-feature .hero img {
  width: 100%;
  height: auto;
}

#work-feature .description, #work-feature h1 {
  width: 50%;
  display: inline-block;
}

#work-feature .description {
  font-size: 14px;
}

#work-feature .images {
  clear: both;
}

#work-feature .images > div {
  display: inline-block;
  float: left;
  margin: 60px 50px;
  width: 150px;
}

#work-feature .images img {
  width: 100%;
}

#work-list {
  clear: both;
}
</style>
