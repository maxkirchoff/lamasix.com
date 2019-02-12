<template>
  <section>
    <div class="bg-wrapper">
    </div>
    <div id="what-we-do">
      <h1>Brand, Product, and Digital Experience</h1>
      <p>LAMA SIX is a creative studio formed by ISLA MURRAY and MAX KIRCHOFF. We work with some of the biggest and smallest partners building and executing bold, new ideas. <a href="mailto:hi@lamasix.com">Tell us about your project.</a></p>
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
    <div class="who-we-are-wrapper">
      <div id="who-we-are">
        <h2>Who we are</h2>
        <p>Our collaborators and clients include entrepreneurs, industry leaders, start-ups, investors, makers and content creators. We guide, plan and execute with rapid and thoughtful approaches to realize and substantialize visionary ideas.</p>
        <p>We believe in the transformational expression that products and digital experiences open up to every person.</p><p>Our name is an anagram of “Isla” and “Max,” remixed into “LAMA SIX.” The studio, as the name, is a representation of our own talent, experience and skills as well as the playful and clever nature of our work. Both of us come from diverse backgrounds colored by our curiosity, creativity and drive.</p>
      </div>
      <div id="bio-pic">
        <img src="../assets/isla-max_1x.jpg" srcset="../assets/isla-max_1x.jpg 600w, ../assets/isla-max_2x.jpg 1000w" />
      </div>
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
    <div class="greeting-wrapper">
      <div id="greeting" v-html="greeting">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      greeting: this.getGreeting(),
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
  },
  mounted: function () {
    let greeting = document.getElementById('greeting')

    let greetingStr

    if (screen.width < 700) {
      greetingStr = greeting.innerHTML.split('<')[0]
      greetingStr = greetingStr.split('')
    } else {
      greetingStr = greeting.innerText.split('')
    }

    for (let i = 0; i < greetingStr.length; i++) {
      greetingStr[i] = '<span>' + greetingStr[i] + '</span>'
    }
    greeting.innerHTML = greetingStr.join('')

    let letters = document.getElementById('greeting').childNodes
    let letterClones = document.getElementById('greeting').cloneNode(true).childNodes

    let greetingInfo = []
    for (let j = 0; j < letterClones.length; j++) {
      greetingInfo[j] = {
        top: letters[j].offsetTop,
        left: letters[j].offsetLeft,
        position: 'absolute'
      }
    }
    greeting.innerHTML = ''

    let j = 0
    let letterMatrix = {}
    while (letterClones.length > 0) {
      letterClones[0].style.top = greetingInfo[j].top + 'px'
      letterClones[0].style.left = (greetingInfo[j].left + 2000) + 'px'
      letterClones[0].style.position = greetingInfo[j].position

      if (letterMatrix[greetingInfo[j].top] === undefined) {
        letterMatrix[greetingInfo[j].top] = []
      }

      letterMatrix[greetingInfo[j].top].push(greeting.appendChild(letterClones[0]))
      j++
    }

    for (var key in letterMatrix) {
      if (letterMatrix.hasOwnProperty(key)) {
        for (let i = 0; i < letterMatrix[key].length; i++) {
          let letter = letterMatrix[key][i]
          setTimeout(function () {
            letter.style.left = (letter.offsetLeft - 2000) + 'px'
          }, 500 + Math.floor(Math.random() * ((i * Math.random()) * 200)))
        }
      }
    }
  },
  methods: {
    getGreeting: function () {
      const dateTime = new Date()
      const day = dateTime.getDay()
      const hour = dateTime.getHours()
      switch (true) {
        case (day === 0 || day === 6):
          return "It's the weekend!"

        case (day === 5 && hour > 12):
          return 'Hello, hello. TGIF!'

        case (hour > 3 && hour <= 11):
          return 'Good morning.'

        case (hour > 11 && hour <= 17):
          return "Good afternoon. <span class='extra'>It's lovely to see you.</span>"

        case (hour > 17 && hour <= 23):
          return 'Good evening.'

        default:
          return 'Up late?'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #greeting span:nth-of-type(3n-1) {
    transition: all 1s cubic-bezier(0,1.02,.52,1.58);
  }
  #greeting span:nth-of-type(4n-1) {
    transition: all 500ms cubic-bezier(0,1.02,.87,1.15);
  }
  #greeting span:nth-of-type(2n-1) {
    transition: all 1s cubic-bezier(0,1.02,.29,1.15);
  }
  #greeting span {
    transition: all 750ms cubic-bezier(0.685, 1.650, 0.350, 0.555);
  }
</style>
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
    width: 700px;
    margin: 80px auto 200px;
  }

  @media (min-width: $xl-width-min) {
    margin: 80px 0 200px 200px;
    position: absolute;
    right: 50%;
  }

  h1 {
    font-family: $bold-serif;
    font-size: 56px;
    margin: 0 0 0 -5px;
    line-height: 1.1em;
    letter-spacing: 0.5px;
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
      margin-right: 100px;
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

  @media (min-width: $sm-width-min) {
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

      &#describe {
        margin-left: -50px;
      }

      &#design {
        margin-top: -50px;
        margin-right: -100px;
      }

      &#build {
          margin: 80px 0 0 40px;
      }
    }

    @media (min-width: $md-width-min) {
      &#describe {
        margin-left: -100px;
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

      @media (min-width: $sm-width-min) {
        max-width: 300px;
      }


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

  @media (min-width: $sm-width-min) {
    width: 400px;
    margin: 450px 0 0 0;
    float: left;
  }

  @media (min-width: $md-width-min) {
    margin: 450px 0 0 100px;
  }

  @media (min-width: $xl-width-min) {
    margin-top: 800px;
    float: right;
    margin-right: 100px;
  }

  p {
    line-height: 1.4em;

  }
}

#bio-pic {
  margin: 50px 30px;

  @media (min-width: $sm-width-min) {
    width: 400px;
    position: absolute;
    right: 30px;
    margin-top: 200px;
    z-index: -1;
  }

  @media (min-width: $md-width-min) {
    right: auto;
    position:static;
    width: 400px;
    float: right;
    margin-top: 100px;
    margin-right: 100px;
  }
  @media (min-width: $xl-width-min) {
    float: left;
    margin-top: 700px;
    margin-left: 1000px;
    width: 30%;
    position: absolute;
  }
  img {
    width: 100%;
  }

  &:after {
    content: "";
    display: block;
  }
}

.who-we-are-wrapper {
  &:after {
    content: " ";
    display: block;
    clear:both;
    @media (min-width: $xl-width-min) {
      clear: none;
    }
  }
}

#press {
  margin: 140px 30px 0;

  @media (min-width: $sm-width-min) {
    width: 400px;
    margin: 200px auto 0 40%;
  }

  @media (min-width: $xl-width-min) {
    position: absolute;
    margin: 600px 0 0 100px;
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
.greeting-wrapper {
  transform: rotate(90deg);
  min-height:20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 800px;
  z-index: -1;
  overflow-x:hidden;

  @media (min-width: $sm-width-min)  {
    right:100px;
    overflow-x:visible;
  }

  #greeting {
    position:absolute;
    margin-top:30px;
    text-align: left;
    font-size: 120px;
    font-family: $bold-serif;
    font-weight: bold;
    color: #8DFFBD;
    transition: all 5s linear;
    animation: 1s letterSpacingImplode;
    line-height: 1em;
    position: relative;
    height: 800px;
    letter-spacing: 2px;
    visibility: hidden;

    @media (min-width: $sm-width-min) {
      font-size: 150px;
      visibility: visible;
    }

    @media (min-width: $md-width-min) {
      line-height: 1em;
    }

    .extra {
      display: none;

      @media (min-width: $sm-width-min) {
        display: inline;
      }
    }
  }
}
</style>
