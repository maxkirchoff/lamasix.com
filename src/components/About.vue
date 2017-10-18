<template>
  <section>
    <div class="bg-wrapper">
      <div id="bg">
        Describe Design Build
      </div>
    </div>
    <div id="what-we-do">
      <h2>What we do</h2>
      <h1>Brand, Product, and  Digital Experience</h1>
      <p>We specialize in Brand, Product and Digital Experience. LAMA SIX is a creative & innovation studio that was formed by ISLA MURRAY and MAXIMILLIAN KIRCHOFF.</p>
      <a href="mailto:hi@lamasix.com" class="cta-button">Tell us about your project.</a>
    </div>
    <div id="services">
      <div id="describe">
        <h3>Describe</h3>
        <ul>
          <li>Brand Strategy</li>
          <li>Creative Ideation</li>
          <li>Digital Experience Strategy</li>
          <li>User-centric Marketing</li>
          <li>Growth Hacking</li>
        </ul>
      </div>
      <div id="design">
        <h3>Design</h3>
        <ul>
          <li>Branding</li>
          <li>Identity</li>
          <li>Creative Direction</li>
          <li>Visual Design</li>
        </ul>
      </div>
      <div id="build">
        <h3>Build</h3>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Technical Direction</li>
          <li>Storytelling & Narrative Development</li>
        </ul>
      </div>
    </div>
    <div id="who-we-are">
      <h2>Who we are</h2>
      <p>LAMA SIX is a creative & innovation studio that was formed by ISLA MURRAY and MAXIMILLIAN KIRCHOFF. Our collaborators and clients include entrepreneurs, industry leaders, start-ups, investors, makers and content creators. We guide, plan and execute with rapid and thoughtful approaches to realize and substantialize visionary ideas.  </p>
      <p>We believe in the transformational experiences that products are to every person. The name is an anagram of “Isla” and “Max,” remixed into “LAMA SIX.” The studio and name is a representation of their own talent, experience and skills as well as the playful, yet clever, nature of their work and work styles. Both Max and Isla come from diverse backgrounds colored by their curiosity, drive and creativity.</p>
    </div>
    <div id="press">
      <h2>Press</h2>
      <ul>
        <li v-for="pressLink in pressLinks">
          <a v-bind:href="pressLink.url" target="_blank">
            <span class="source">{{ pressLink.source }}</span>
            <span class="title">{{ pressLink.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      pressLinks: [
        {
          title: 'The Fight Against Sexist Stock Photography',
          url: 'https://www.racked.com/2015/11/5/9648598/stock-photography-sexist-getty-images-shutterstock',
          source: 'Racked'
        },
        {
          title: 'The Women Behind The New Bustle On Reinventing “Women’s Media”',
          url: 'https://www.fastcompany.com/3063755/exclusive-the-women-behind-the-new-bustle-on-reinventing-womens-media',
          source: 'Fast Company'
        },
        {
          title: 'Bustle bets big on memes and illustrations',
          url: 'https://digiday.com/media/bustle-bets-big-memes-illustrations/',
          source: 'Digiday'
        },
        {
          title: 'Duck on a leash waddles onto the subway',
          url: 'http://nypost.com/2017/08/22/duck-on-a-leash-waddles-onto-the-subway/',
          source: 'New York Post'
        },
        {
          title: "'This fish tastes like fish': 4-year-olds review high-end restaurants",
          url: 'https://www.today.com/food/fish-tastes-fish-4-year-olds-review-high-end-restaurants-2D79635458',
          source: 'TODAY'
        },
        {
          title: "Portland's Trees By Bike delivery company gears up for second season",
          url: 'http://www.oregonlive.com/portland/index.ssf/2010/12/portlands_trees_by_bike_delive.html',
          source: 'Oregon Live'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../scss/variables";

h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 40px 0 15px;
}

#what-we-do {
  margin: 20px 30px 140px;

  @media (min-width: $sm-width-min) {
    margin-top: 80px;
    margin-bottom: 160px;
  }

  @media (min-width: $md-width-min) {
    width: 800px;
    margin: 80px auto 200px;
  }

  @media (min-width: $xl-width-min) {
    margin: 80px 0 200px 200px;
    position: absolute;
    right: 50%;
  }

  h1 {
    font-family: $bold-serif;
    font-size: 60px;
    margin: 0 0 0 -5px;
    line-height: 1em;

    @media (min-width: $sm-width-min) {

    }
  }

  @media (min-width: $sm-width-min) {
    h2 {
      margin-bottom: 20px;
    }
  }

  p {
    margin: 40px 0;
    line-height: 1.4em;

    @media (min-width: $sm-width-min) {
      margin-top: 20px;
    }
  }

  a.cta-button {
    margin-top: 20px;
    @media (min-width: $sm-width-min) {
      margin-top: 40px;
    }
  }
}

#services {

  @media (min-width: $md-width-min) {
    width: 800px;
    margin: 0 auto;
  }

  @media (min-width: $xl-width-min) {
    width: 800px;
    position: absolute;
    margin: 0;
    left: 50%;
  }

  > div {
    width: 60vw;
    margin: 90px 0 0 30px;

    &#design {
      margin-right: 30px;
      margin-left: auto;
    }

    @media (min-width: $sm-width-min) {
      width: 50%;
      margin: 0 0 0 30px;
      max-width: 400px;

      &#build {
          margin: 80px 0 0 90px;
      }
    }

    @media (min-width: $md-width-min) {
      &#describe {
        margin-left: -100px;
      }

      &#design {
        margin-top: -50px;
        margin-right: -100px;
      }

      &#build {
          margin: 120px 0 0 90px;
      }
    }

    @media (min-width: $xl-width-min) {
      &#describe {
        margin-left: 100px;
      }

      &#design {
        margin-top: -50px;
        margin-right: -100px;
      }

      &#build {
          margin: 120px 0 0 180px;
      }
    }

    h3 {
      font-size: 16px;
      font-weight: normal;
      margin: 0;
    }

    ul {
      border-top: 2px solid #000;
      list-style: none;
      font-size: 16px;
      padding-top:20px;
      margin-top:10px;
      display: table;
      width: 100%;
      padding-left:0;


      > li {
        display: table-row;
        line-height: 1.5em;

        &:before {
          content: "\2014\a0";
          width: 20px;
          margin: 0 10px 0 10px;
          text-align: left;
          display: table-cell;
        }
      }
    }
  }
}
#who-we-are {
  margin: 140px 30px 0;

  @media (min-width: $md-width-min) {
    width: 800px;
    margin: 180px auto 0;
  }

  @media (min-width: $xl-width-min) {
    width: 550px;
    margin-top: 900px;
    position: absolute;
    left: 60%;
  }

  p {
    line-height: 1.4em;

  }
}

#press {
  margin: 140px 30px 0;

  @media (min-width: $md-width-min) {
    width: 800px;
    margin: 140px auto 0;
  }

  @media (min-width: $xl-width-min) {
    width: 600px;
    margin-top: 700px;
    position: absolute;
    right: 65%;
  }

  ul {
    padding: 0;
    list-style-type: none;

    li {
      border-top: solid 2px #000;
      padding: 15px 0 20px;
    }
  }

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }

    .source {
      text-transform: uppercase;
      display: block;
      margin: 5px 0;
    }
  }
}
</style>
