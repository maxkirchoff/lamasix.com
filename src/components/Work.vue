<template>
  <section id="works">
    <div id="work-feature" v-if="$route.params.work_key">
      <div class="header-section">
        <div class="hero" v-if="works[$route.params.work_key].hero">
          <div v-if="works[$route.params.work_key].hero.type === 'gifMovie'" id="gifMovie">
            <img v-bind:src="works[$route.params.work_key].hero.container" />
            <img v-bind:src="works[$route.params.work_key].hero.gif" />
          </div>
          <img v-else v-bind:src="works[$route.params.work_key].hero" />
        </div>
        <h1>
          <span class="type" v-if="works[$route.params.work_key].type">
            {{ works[$route.params.work_key].type }}:
          </span>
          {{ works[$route.params.work_key].name }}
        </h1>
        <div class="description" v-html="works[$route.params.work_key].long_description">
        </div>
        <div class="cta" v-if="works[$route.params.work_key].cta_text">
          <a v-bind:href="works[$route.params.work_key].cta_url" target="_blank">
            {{ works[$route.params.work_key].cta_text }}
          </a>
        </div>
      </div>
      <div class="assets">
        <div v-for="(image, type) in works[$route.params.work_key].images">
          <div v-if="type === 'special'" class="special">
            <div v-if="image.type === 'iphoneScroll'" id="iphone-scroll">
              <img v-bind:src="image.iphone" id="iphone-container" />
              <div id="iphone-content-wrapper">
                <img v-bind:src="image.content" id="iphone-content" />
              </div>
            </div>
            <div v-else-if="image.type === 'gifMovie'" id="gifMovie">
              <img v-bind:src="image.container" id="movieContainer" />
              <img v-bind:src="image.gif" id="movieGif" />
            </div>
          </div>
          <img v-else v-bind:src="image" />
        </div>
      </div>
      <div id="work-bg" v-bind:style="{ backgroundImage: 'url(' + works[$route.params.work_key].background_image  + ')' }">
      </div>
    </div>
    <div id="work-list">
      <ul>
        <li v-for="(work, work_key) in works">
          <router-link :to="'/work/' + work_key" v-scroll-to="'body'">
            <div class="work-link-wrapper">
              <img v-bind:src="work.thumbnail" />
              <div class="client-info">
                <span class="type" v-if="work.type">{{ work.type }}: </span>
                <span class="name">{{ work.name }}</span>
                <span class="short-description" v-if="work.short_description">{{ work.short_description }}</span>
              </div>
            </div>
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
          type: 'client',
          thumbnail: require('../assets/work/monegraph.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: "<p>Art party hammock taiyaki hashtag sartorial, aesthetic cloud bread jean shorts trust fund photo booth lyft tilde fanny pack hell of. Echo park portland craft beer, green juice godard gastropub +1 bushwick marfa tote bag hoodie post-ironic jianbing glossier. Poutine selvage affogato glossier health goth. Lyft taxidermy swag, wayfarers helvetica man bun slow-carb letterpress cliche listicle lumbersexual photo booth umami.</p><p>Lo-fi twee echo park, master cleanse selfies polaroid jianbing neutra live-edge schlitz chia fashion axe. Etsy stumptown mumblecore wayfarers. Ennui tilde fashion axe 8-bit vinyl cray kogi sartorial selfies, fanny pack slow-carb quinoa. Bitters intelligentsia cardigan direct trade sustainable wolf. Gluten-free 90's slow-carb pok pok mumblecore. Iceland kombucha celiac, cardigan hexagon echo park flexitarian typewriter vexillologist humblebrag marfa trust fund. Umami kogi lumbersexual, tacos af VHS enamel pin.</p>",
          hero: require('../assets/work/monegraph-hero.png'),
          cta_text: 'View Campaign',
          cta_url: 'http://graintheory.mcast.io',
          background_image: require('../assets/work/monegraph-bg.png'),
          images: {
            image1: require('../assets/work/monegraph-1.png'),
            image2: require('../assets/work/monegraph-2.png'),
            special: {
              type: 'iphoneScroll',
              iphone: require('../assets/work/iphone-empty.png'),
              content: require('../assets/work/monegraph-scroll.jpg')
            },
            image4: require('../assets/work/monegraph-4.png')
          },
          onload_methods: [
            this.iphoneScroll
          ]
        },
        prompt_me: {
          name: 'Prompt Me',
          type: 'project',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: {
            type: 'gifMovie',
            gif: require('../assets/work/prompt-me.gif'),
            container: require('../assets/work/macbook-empty.png')
          },
          cta_text: 'Visit Website',
          cta_url: 'http://promptme.xyz',
          background_image: require('../assets/work/prompt-me-bg.png'),
          images: [
            require('../assets/work/prompt-me-1.png'),
            require('../assets/work/prompt-me-2.png'),
            require('../assets/work/prompt-me-3.png')
          ]
        },
        fries: {
          name: 'Fries',
          type: 'project',
          thumbnail: require('../assets/work/fries.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: require('../assets/work/fries-hero.png'),
          cta_text: 'Visit Website',
          cta_url: 'http://fries.social',
          background_image: '',
          images: {
            image1: require('../assets/work/fries-1.png'),
            image2: require('../assets/work/fries-2.png'),
            special: {
              type: 'gifMovie',
              gif: require('../assets/work/fries-signup.gif'),
              container: require('../assets/work/macbook-empty.png')
            },
            image4: require('../assets/work/fries-4.png')
          }
        },
        the_sum: {
          name: 'The SUM',
          type: 'project',
          thumbnail: require('../assets/work/the-sum.png'),
          short_description: 'A two-day conference designed to help guests reimagine creative possibilities.',
          long_description: '<p>The Sum was a two-day conference in San Francisco designed to help guests reimagine creative possibilities for themselves and their cities, organized by The Bold Italic.</p><p>Leveraging the idea of exquisite corpse, we created a visual system and collaged photography used throughout all promotional materials. We also designed the responsive website and produced environmental graphics and schwag for the event itself.</p><p>This project included event design, brand identity, visual system design, photography and digital expereince design & development.',
          hero: require('../assets/work/the-sum-hero.png'),
          cta_text: 'Visit Website',
          cta_url: 'http://thesum.lamasix.com',
          background_image: '',
          images: [
            require('../assets/work/thesum-3.jpg'),
            require('../assets/work/thesum-2.jpg'),
            require('../assets/work/thesum-1.jpg')
          ]
        },
        romper: {
          name: 'Romper',
          type: 'project',
          thumbnail: require('../assets/work/romper.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: require('../assets/work/romper-hero.gif'),
          background_image: require('../assets/work/romper-bg.png'),
          images: [
            require('../assets/work/romper-1.png'),
            require('../assets/work/romper-2.png')
          ]
        },
        levis: {
          name: "City Guide for Levi's",
          type: 'project',
          thumbnail: require('../assets/work/levis.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: require('../assets/work/levis-hero.png'),
          images: [
            require('../assets/work/levis-1.jpg'),
            require('../assets/work/levis-2.png'),
            require('../assets/work/levis-3.jpg'),
            require('../assets/work/levis-4.jpg'),
            require('../assets/work/levis-5.jpg')
          ]
        },
        interactive_flowcharts: {
          name: 'Interactive Flowcharts',
          type: 'project',
          thumbnail: require('../assets/work/interactive-flowcharts.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: require('../assets/work/interactive-flowcharts-hero.png'),
          background_image: '',
          images: [
            require('../assets/work/interactive-flowcharts-1.png'),
            require('../assets/work/interactive-flowcharts-2.png')
          ]
        },
        photography: {
          name: 'Photography',
          type: 'project',
          thumbnail: require('../assets/work/photography.jpg'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          background_image: '',
          images: {
            image1: require('../assets/work/photography-1.jpg'),
            image2: require('../assets/work/photography-2.jpg'),
            image3: require('../assets/work/photography-3.jpg'),
            image4: require('../assets/work/photography-4.jpg')
          }
        }
        /* ,
        gen_z_studio: {
          name: 'Gen Z Studio',
          thumbnail: require('../assets/work/gen-z-studio.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: 'Lorem ipsum',
          hero: '',
          background_image: '',
          images: []
        }, */
      }
    }
  },
  mounted: function () {
    if (this.$route.params.work_key) {
      this.addWorkStyles(this.$route.params.work_key)
      this.triggerOnloadMethods(this.$route.params.work_key)
    }
  },
  beforeDestroy () {
    this.removeWorkStyles()
  },
  watch: {
    '$route': function () {
      if (this.$route.params.work_key) {
        this.addWorkStyles(this.$route.params.work_key)
        let that = this
        setTimeout(function () {
          that.triggerOnloadMethods(that.$route.params.work_key)
        }, 1000)
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
      this.removeBodyTheme()
    },
    addBodyTheme: function (workTheme) {
      document.body.dataset.theme = workTheme
      if (this.works[this.$route.params.work_key].background_image) {
        document.body.style.backgroundImage = "url('" + this.works[this.$route.params.work_key].background_image + "')"
      } else {
        document.body.style.backgroundImage = ''
      }
    },
    removeBodyTheme: function () {
      document.body.dataset.theme = ''
      document.body.style.backgroundImage = ''
    },
    iphoneScroll: function (oldTop) {
      let iphoneContent = document.getElementById('iphone-content')
      if (iphoneContent) {
        let newTop = 0
        let maxTop = 230
        let minTop = 15

        if (oldTop < 230) {
          newTop = oldTop + Math.random() * ((maxTop - oldTop) - minTop) + minTop
        }
        console.log('iphone scroll active')
        let that = this
        setTimeout(function () {
          iphoneContent.style.top = '-' + newTop + '%'
          that.iphoneScroll(newTop)
        }, 1500)
      }
    },
    triggerOnloadMethods: function (workKey) {
      if (this.works[workKey].onload_methods !== undefined && this.works[workKey].onload_methods.length > 0) {
        let onloadMethods = this.works[workKey].onload_methods
        for (let i = 0; i < onloadMethods.length; i++) {
          onloadMethods[i]()
          console.log('what?')
        }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/variables";

a {
  color: #000;
  text-decoration: none;
}

#works {
  overflow-x: visible;
}

#work-feature {
  clear: both;
  padding: 0 20px;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  @media (min-width: $md-width-min) {
    width: 1000px;
    margin: 0 auto;
  }

  .hero {
    margin-top: -100px;

    @media (min-width: $sm-width-min) {
      margin-top: 0;
      float: right;
      width: 50%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    text-transform: uppercase;
    font-size: 20px;

    @media (min-width: $sm-width-min) {
      padding-top: 100px;
      color: #000;
      width:30%;
    }
  }

  .description {

    @media (min-width: $sm-width-min) {
      width:40%;
    }

    p {
      font-size: 14px;
      &:first-of-type {
        font-weight: bold;
      }
    }
  }

  .cta {
    a {
      width: 50%;
      display: block;
      border: 2px solid #000;
      text-decoration: none;
      text-align: center;
      padding: 10px 40px;
      margin: 40px auto;
      font-weight: bold;

      @media (min-width: $sm-width-min) {
        margin: 50px 0 0;
        width: 15%;
        min-width: 150px;
        padding: 10px auto;
      }
    }
  }

  .assets {
    clear: both;

    @media (min-width: $sm-width-min) {
      margin-top: 100px;
    }

    > div {
      display: inline-block;
      width: 40%;
      margin: 20px 5%;

      &:nth-of-type(n+3) {
        width: 90%;
      }

      @media (min-width: $sm-width-min) {
        float: left;
        width: 25%;
        margin: 100px 12% 0 0;

        &:nth-of-type(n) {
          width: 25%;
        }

        &:nth-of-type(2) {
          margin-right: 0;
        }
        &:nth-of-type(3) {
          float: right;
          margin-right: 0;
          width: 25%;
        }
      }

      img {
        vertical-align: top;
      }
    }

    img {
     width: 100%;
    }
  }
  #gifMovie {
    position: relative;
    overflow: hidden;
    img:first-of-type {

    }
    img:last-of-type {
      position: absolute;
      top: 0;
      z-index: -1;
      width: 78%;
      margin: 4% 11%;
    }
  }
}

#work-list {
  clear: both;
  background: #fff;
  padding: 100px 60px 100px;
  margin: 100px 0;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  @media (min-width: $sm-width-min) {
    margin: 100px -60px 0;
  }

  @media (min-width: $md-width-min) {
    padding-left: 20%;
    padding-right: 20%;
  }

  ul {
    list-style-type: none;
    padding: 0 20px;
    @media (min-width: $sm-width-min) {
      padding: 0;
    }

    li {
      display: block;
      margin-bottom: 50px;
      width:100%;

      @media (min-width: $sm-width-min) {
        float: left;
        width: 30%;
        margin-right: 5%;

        &:nth-of-type(3n) {
          margin-right: 0;
        }

      }

      a {
        display:block;

        @media (min-width: $sm-width-min) {
          position: relative;

          &:hover {
            background-color: $l6-green;
            transition: all 200ms;
            img {
              opacity: 0;
              transition: all 300ms;
            }

            .client-info {
              opacity: 1;
            }
          }
        }

        img {
          width: 100%;
          display: block;
        }

        .client-info {
          font-size: 16px;
          margin: 10px 0 0;

          @media (min-width: $sm-width-min) {
            font-size: 14px;
            position: absolute;
            top: 0;
            opacity: 0;
            transition: all 300ms;
            padding: 10px 15px;
          }

          .type, .name {
            font-weight: bold;
          }

          .type {
            text-transform: capitalize;
          }

          .name:after {
            content:"\2022";
            padding: 0 2px 0 7px;
            @media (min-width: $sm-width-min) {
              display: none;
            }
          }

          .short-description {
            @media (min-width: $sm-width-min) {
              display: block;
              margin: 15px 0 0 0;
            }
          }
        }
      }
    }
  }
}
</style>
<!-- Work theme styles only -->
<style lang='scss'>
@import '../scss/variables';

#iphone-scroll {
  position: relative;
  overflow: hidden;

  #iphone-content-wrapper {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: 20px 0;
    overflow:hidden;
    img {
      transition: all 500ms ease-in;
      position: absolute;
      z-index:-1;
      top:0;
      width: 90%;
      margin: 5%;
    }
  }
}


body {
  transition: background-color 750ms, color 750ms;
  transition-delay: 500ms;
}

body[data-theme="levis"] {
  #work-feature {
    .assets {
      @media (min-width: $sm-width-min) {
        > div {
          width: 100%;

          &:nth-of-type(2) {
            width: 30%;
          }
          &:nth-of-type(3) {
            width:60%;
          }
        }
      }
    }
  }
}

body[data-theme="romper"] {
  background-repeat: no-repeat;
  background-size: 90% auto;
  background-position: center 200px;

  @media (min-width: $sm-width-min) {
    background-position: center top;
  }

  @media (min-width: $md-width-min) {
    background-size: 1000px auto;
  }

  #work-feature {
    .assets {
      margin-top: 200px;
      > div {
        width: 90%;

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            width: 30%;
            margin-right: 10%;
          }
          &:last-of-type {
            width: 60%;
          }
        }
      }
    }
  }
}

body[data-theme="prompt_me"] {
  background-color: #C1EAE7;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

body[data-theme="the_sum"] {
  background-color: #86E9EE;

  #work-feature {

    .hero {
      position: absolute;
      right: -5%;
      width: 60%;
    }
    .assets {
      margin-top: 100px;
      @media (min-width: $sm-width-min) {
        > div {
          width: 100%;
        }
      }
    }
  }
}

body[data-theme="photography"] {
  @media (min-width: $sm-width-min) {
    #work-feature .assets > div {
      width: 100%;
    }
  }
}

body[data-theme="fries"] {
  background-color: #E5D8EF;

  #work-feature {
    .assets {
      > div {
        width: 90%;
      }
      @media (min-width: $sm-width-min) {
        div:first-of-type, div:last-of-type {
          width: 100%;
        }
        div:nth-of-type(2) {
          width: 20%;
          margin-right:5%;
        }
        div:nth-of-type(3) {
          width:75%;
        }
      }
    }
  }
}

body[data-theme="monegraph"] {
  color: #fff;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: 45% 5%;

  .logo:not(.black) * {
    fill: #ffffff;
  }

  .menu-button span {
    background: #fff;
    color: #fff;
  }

  .menu-button.active span {
    background: #000;
    color: #000;
  }

  nav.active a {
    color: #000;

    @media (min-width: $sm-width-min) {
      color: #fff;
      transition: color 750ms;
      transition-delay: 500ms;
    }
  }

  #work-feature {
    h1 {
      color: #fff;
    }
    a {
      color: #fff;
      border-color: #fff;
    }
  }
}
</style>
