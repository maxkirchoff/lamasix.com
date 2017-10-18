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
          <div v-if="isNaN(type) && type.includes('special')" class="special">
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
            <div v-else-if="image.type === 'text'" class="text"  v-html="image.content">
              what
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
          long_description: '<p>This is a mobile-only, influencer-centric platform for ephemeral web and ecommerce experiences. We worked with Monegraph from ideation to launch, crafting the strategy and approach that enabled brands to work with influencers to easily create and distribute original, compelling content across their social channels that seamlessly drove their fans to unique and bespoke, short-lived digital experiences and conversion opportunities.</p><p>In addition to the platform creation, we designed the initial campaign in partnership with <a href=”http://graintheory.bigcartel.com/” target=”_blank”>Grain Theory</a>, a US-based, small production Kendama brand. The Grain Theory campaign that launched on the platform sold out of product in 10 minutes and had a 40% opt-in rate for SMS notifications and interactions. The experience was both financially successful and very well received by their audience.</p>',
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
          name: 'Prompt Me XYZ',
          type: 'project',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'A new 20 minute creative exercise every day.',
          long_description: '<p>An exercise in daily creativity, this releases a new 20 minute creative exercise every day. It is both a web app and a community of people who submit their prompted creations to be shared.</p><p>We designed the identity and interface of the promptme.xyz site and social community, and collaborated with <a href=”http://zahraism.com” target=”_blank”>Zahra Jabini</a> to build and launch the site.</p>',
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
          thumbnail: require('../assets/work/fries.jpg'),
          short_description: 'A slack community of supportive, creative ladies.',
          long_description: '<p>Fresh. Rad. Interesting. Encouraging. Sisters.<br /> We created Fries as a community of women to support and promote personal and professional development while maintaining the playful and creative inspiration we all need.</p><p>We designed, built and launched the identity, community and all supporting technology - as well as actively manage and moderate the community. This community is primarily on Slack and across social channels, however there have now been regional meet-ups in San Francisco and New York.</p>',
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
          thumbnail: require('../assets/work/the-sum.jpg'),
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
          type: '',
          thumbnail: require('../assets/work/romper.png'),
          short_description: 'A site for a new generation of women figuring out what motherhood means for them.',
          long_description: "<p>Created while working with Bustle Digital Group, this site focuses on Millenial motherhood and chronicles the crazy adventure in a thoughtful, honest and fun way.</p><p>We worked on branding, identity design, web design and built the visual language from the ground up, partnered with Bustle's editorial and technology teams.</p>",
          hero: require('../assets/work/romper-hero.gif'),
          background_image: require('../assets/work/romper-bg.png'),
          cta_text: 'View Website',
          cta_url: 'https://www.romper.com',
          images: [
            require('../assets/work/grow-up-together.png'),
            require('../assets/work/romper-1.png'),
            require('../assets/work/romper-2.png')
          ]
        },
        levis: {
          name: "City Guide for Levi's",
          type: 'project',
          thumbnail: require('../assets/work/levis.jpg'),
          short_description: 'Guides of San Francisco neighborhoods for Levi’s Senior Global Marketing team.',
          long_description: '<p>A series of neighborhood guides that Levi’s used to introduce their Senior Global Marketing team to the company’s hometown of San Francisco. The guides put a spotlight on San Francisco’s most exciting areas and provided an in-depth exploration of the culture and makers thriving within each. The final products were printed pieces with expandable maps that could easily be referenced on the go.</p><p>We built these guides from ideation to execution, designing the entire book as well as creating content with our partners at The Bold Italic.</p>',
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
          short_description: 'A beautiful new way to engage with content and tell stories.',
          long_description: '<p>The Interactive Flowcharts offer an exciting and compelling platform for content and story-telling beyond static images, text articles or cutsy magazine quizzes. The platform offers a content creator the chance to make interactive and rich expereinces for the content they are working with.</p><p>The platform has won a <a href="https://www.webbyawards.com/winners/2017/websites/website-features-and-design/best-visual-design-function/bustles-interactive-flowcharts/" target="_blank">Webby for "Best Visual Design - Function"</a> as well as other <a href="https://www.designrush.com/best-design/bustle" target="_blank">awards and mentions</a>. Originally designed & built in collaboration with the taleneted <a href="http://work.tetto.org/" target="_blank">Donald Tetto</a>, this platform for flowcharts was created and launched on Bustle in partnership with their editorial team.</p>',
          hero: require('../assets/work/interactive-flowcharts-hero.png'),
          background_image: '',
          cta_text: 'View Flowcharts',
          cta_url: 'https://www.bustle.com/flowcharts',
          images: [
            require('../assets/work/interactive-flowcharts-1.png'),
            require('../assets/work/interactive-flowcharts-2.png')
          ]
        },
        ogx: {
          name: 'OGX',
          type: 'Client',
          thumbnail: require('../assets/work/ogx.jpg'),
          short_description: 'A fresh look for OGX as branded content on Bustle.',
          long_description: '<p>As part of an OGX campaign for Bustle.com, we managed art direction of visuals across photoshoots for multiple peices of branded content and for a custom event.</p>',
          cta_text: 'View Campaign',
          cta_url: 'https://www.bustle.com/p/heres-what-happened-when-we-transformed-a-nyc-hotspot-into-a-tropical-oasis-70141',
          background_image: '',
          images: {
            image1: require('../assets/work/ogx-1.jpg'),
            image2: require('../assets/work/ogx-2.jpg'),
            image3: require('../assets/work/ogx-3.jpg'),
            image4: require('../assets/work/ogx-4.jpg')
          }
        },
        please: {
          name: 'Please',
          type: '',
          thumbnail: require('../assets/work/please.png'),
          short_description: 'A place for beauty, realness, and humor to come together to form all of those IRL moments.',
          long_description: '<p>A celebration of real women who are having fun with beauty, makeup, and trends. A community that shares photos of real ladies having fun with new styles and showcasing the "ones they love best". Strong women who use beauty to express themselves and are fighting the old beauty standards.</p><p>We led Bustle’s design team from ideation to launch of the community, with on-going support for content and community brand.</p>',
          cta_text: 'View Community',
          cta_url: 'https://www.instagram.com/please/',
          hero: require('../assets/work/please-hero.png'),
          background_image: '',
          images: {
            image1: require('../assets/work/please-1.jpg'),
            image2: require('../assets/work/please-2.png'),
            image3: require('../assets/work/please-3.png'),
            image4: require('../assets/work/please-4.jpg')
          }
        },
        bustle: {
          name: 'Bustle',
          type: '',
          thumbnail: require('../assets/work/bustle.jpg'),
          short_description: 'Rebrand and visual identity of the largest publication for millenial women.',
          long_description: '<p>"Bustle is for & by women who are moving forward as fast as you are." As a large publication for women, specifically mellenials, Bustle leads with thoughtful content, bold design and brave ideas.</p><p>Isla Murray, co-founder of LAMA SIX, served as the Creative Director through a massive rebrand. She managed the development of Bustle’s visual voice, logomark, site and app designs.',
          cta_text: 'View Website',
          cta_url: 'https://www.bustle.com',
          hero: require('../assets/work//bustle-hero.png'),
          background_image: '',
          images: {
            image1: require('../assets/work/bustle-1.png'),
            image2: require('../assets/work/bustle-2.png'),
            special1: {
              type: 'text',
              content: '<p>"A good place to start is Bustle‘s new logo, an evolution of its former logo, that was in a simple all-caps sans serif font. This version is designed with softer edges to feel warmer and friendlier. It is at an angle to represent movement and energy. The word is underlined, as if to say that it is getting right to the point." — <a href="https://www.fastcompany.com/3063755/exclusive-the-women-behind-the-new-bustle-on-reinventing-womens-media" target="_blank">Fast Comapny</a></p>'
            },
            image3: require('../assets/work/bustle-3.png'),
            special2: {
              type: 'text',
              content: '<p>"The stock photos don’t represent the people reading our articles. So we made our own" — <a href="https://www.racked.com/2015/11/5/9648598/stock-photography-sexist-getty-images-shutterstock" target="_blank">Isla, as quoted on Racked</a></p>'
            },
            image4: require('../assets/work/bustle-4.jpg'),
            image5: require('../assets/work/bustle-5.jpg')
          }
        },
        gen_z_studio: {
          name: 'Gen Z Studio, a think tank',
          thumbnail: require('../assets/work/gen-z-studio.png'),
          short_description: 'Generation Z and young Millenial marketing strategy.',
          long_description: '<p>Gen Z Studio is a think tank and service offering specifically targeted at Generation Z and young Millennials. We specialize in orgnaizations and companies that want to connect to the emerging youth. We are full-service in that we formulate the brand or product marketing strategy and can execute & launch that strategy for you.</p><ul><li>Product Marketing Strategy</li><li>Guide the development and execution of product marketing campaigns</li><li>Brand Affinity</li><li>Develop and execute the futureproof brand identity and voice for GenZ</li><li>Brand or Product Auditing/Calibration</li></ul>',
          hero: require('../assets/work/gen-z-hero.png'),
          cta_text: 'Work With Us',
          cta_url: 'mailto:hi@lamasix.com',
          background_image: '',
          images: []
        }
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
  padding: 0 20px 80px;

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
    padding-top: 20px;
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

    p, ul {
      line-height: 1.3em;
      font-size: 16px;
    }
    a {
      border-bottom: 1px solid #000;
    }
  }

  .cta {
    padding-top: 10px;
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

      .text {
        line-height: 1.3em;
        margin-left: 5%;
        margin-right: 5%;
        a {
          border-bottom: 1px solid #000;

        }
      }

      @media (min-width: $sm-width-min) {
        float: left;
        width: 45%;
        margin: 100px 10% 0 0;

        &:nth-of-type(n) {
          width: 45%;
        }
        &:nth-of-type(2n) {
          margin-right: 0;
        }

      }
      @media (min-width: $md-width-min) {
        width: 20%;
        margin: 50px 5% 0 0;

        &:nth-of-type(n) {
          width: 20%;
          margin-right: 5%;
        }
        &:nth-of-type(4) {
          margin-right: 0;
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

#work-feature + #work-list {
  padding-top: 60px;
  padding-bottom: 100px;
}

#work-list {
  clear: both;
  background: #fff;
  padding: 0 30px;
  margin: 0;

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
    padding: 0;
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
            line-height: 1.2em;
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
    margin: 25px 0;
    overflow:hidden;
    img {
      transition: all 500ms ease-in;
      position: absolute;
      z-index:-1;
      top:0;
      width: 90%;
      margin: 5%;
      padding-top:50px;
    }
  }
}


body {
  transition: background-color 750ms, color 750ms;
  transition-delay: 500ms;
}

body[data-theme="levis"] {
  background-color: #f7f7f7;
  #work-feature {
    .hero {
      position: absolute;
      top:0;
      height: 200px;
      overflow: hidden;
      left: 0;
      right: 0;
      margin: 0;
      z-index: -1;
      img {
        position: absolute;
        width: 600px;
        bottom: 0;
        left: 100px;
      }

      @media (min-width: $sm-width-min) {
        width: 100%;
        height: 400px;
        img {
          right: 0;
          left: auto;
        }
      }
    }
    h1 {
      padding-top: 150px;
    }

    .assets {
      > div {
        &:nth-of-type(n) {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        &:nth-of-type(2) {
          display: none;
        }
        @media (min-width: $sm-width-min) {
          width: 100%;

          &:nth-of-type(2) {
            width: 15%;
            display: block;
            margin-right: 10%;
            margin-left: 5%;
            margin-top: 180px;
          }
          &:nth-of-type(3) {
            width:70%;
          }
        }
      }
    }
  }
}

body[data-theme="romper"] {
  background-color: #f7f7f7;
  background-repeat: no-repeat;
  background-size: 0px 0px;
  background-position: center 500px;

  #work-feature {
    .hero {
      margin-top: -20px;

      @media (min-width: $sm-width-min) {
        margin-top:50px;
      }
    }
    .assets {
      > div {
        width: 90%;

        &:first-of-type {
          display: none;
        }

        &:nth-of-type(2) {
          margin-bottom: 30px;
        }

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            display: block;
            margin: 0;
            width: 100%;
          }

          &:nth-of-type(2) {
            width: 30%;
            margin-right: 10%;
          }

          &:last-of-type {
            width: 60%;
            margin-right: 0;
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

  #work-feature {

    .hero {
      margin-top: 40px;
    }

    h1 {
      margin-top: 40px;
    }

    .assets {
      > div {
        @media (min-width: $sm-width-min) {
          &:nth-of-type(n) {
            width: 25%;
            margin-right: 12.5%;
          }
          &:nth-of-type(3) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

body[data-theme="the_sum"] {
  background-color: #86E9EE;

  #work-feature {
    overflow: hidden;
    .hero {
      overflow: hidden;
      position: absolute;
      right: 0;
      width: 100%;
      z-index:-1;
      img {
        right: -35%;
        position: relative;
      }

      @media (min-width: $sm-width-min) {
        img {
          right: -50%;
        }
      }

      @media (min-width: $md-width-min) {
        width: 50%;

        img {
          right: -20%;
        }
      }
    }
    h1 {
      padding-top:160px;
    }
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
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
    .hero {

      margin-top:-50px;
    }
    .assets {
      margin-top: 80px;
      > div {
        width: 100%;
        margin: 40px 0;

        &:nth-of-type(2) {
          display: none;
        }
      }
      @media (min-width: $sm-width-min) {
        div:first-of-type, div:last-of-type {
          width: 100%;
        }
        div:nth-of-type(2) {
          display: block;
          width: 15%;
          margin-left:10%;
          margin-right:3%;
          margin-top:80px;
        }
        div:nth-of-type(3) {
          width:65%;
        }
      }
    }
  }
}
body[data-theme="ogx"] {
  #work-feature {
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }

      @media (min-width: $sm-width-min) {
        margin-top: 0;
      }
    }
  }
}
body[data-theme="interactive_flowcharts"] {

  #work-feature {
    .hero {
      margin-top: 0;
    }
    @media (min-width: $sm-width-min) {
      .hero {
        margin-top: 200px;
      }
    }
    @media (min-width: $sm-width-min) {
      .hero {
        margin-top: 150px;
      }
    }
    .assets {
      > div {
        width: 90%;

        @media (min-width: $sm-width-min) {
          width:45%;
          margin-right: 10%;

          &:first-of-type {
            margin-top: 50px;
          }

          &:last-of-type {
            width: 45%;
            margin-right: 0;
            margin-top: 0;
          }
        }
      }
    }
  }
}

body[data-theme="please"] {
  #work-feature {
    .hero {
      margin-top: -60px;
      @media (min-width: $sm-width-min) {
        margin-top: 50px;
        width: 40%;
      }
    }

    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;

        &:nth-of-type(2) {
          width: 80%;
          margin-left: 10%;
        }

        @media (min-width: $sm-width-min) {
          &:nth-of-type(2) {
            width: 40%;
            margin-right:10%;
          }
          &:nth-of-type(3) {
            width: 30%;
          }
        }
        @media (min-width: $md-width-min) {
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 100px;
            margin-bottom: 100px;
          }
        }
      }
    }
  }
}
body[data-theme="bustle"] {
  background-color: #f7f7f7;

  #work-feature {
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;

        &:nth-of-type(2) {
          width: 60%;
          margin-left:20%;
        }

        &:nth-of-type(4) {
          width: 80%;
          margin-left: 10%;
        }

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            width: 70%;
          }
          &:nth-of-type(2) {
            width:17%;
            margin-left: 7%;
            margin-right: 0;
            margin-top: 120px;
          }
          &:nth-of-type(3) {
            margin-top: 180px;
            margin-bottom: 150px;
            float: right;
            width: 40%;
          }
          &:nth-of-type(4) {
            margin-top: 150px;
            margin-bottom: 150px;
            float: left;
            width: 40%;
          }
          &:nth-of-type(5) {
            display: none;
          }
        }
      }
    }
  }
}

body[data-theme="gen_z_studio"] {
  background-color: #fbff7b;

  #work-feature {
    .hero {
      width: 75%;
      margin: 50px auto;

      @media (min-width: $sm-width-min) {
        width: 50%;
        margin-top: 150px;
      }

      @media (min-width: $sm-width-min) {
        margin-top: 100px;
      }
    }

    h1 {
      padding-top: 50px;
    }

    ul, ul li {
      margin-left: 10px;
      padding-left: 0;
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

  header, nav, header a, nav a{
    color: #fff;

    .router-link-active {
      border-color: #fff;
    }
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
