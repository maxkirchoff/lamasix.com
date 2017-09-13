<template>
  <section>
    <div id="what-we-do">
      <h2>What we do</h2>
      <h1>Brand, Product, and  Digital Experience</h1>
      <p>We specialize in Brand, Product and Digital Experience. LAMA SIX is a creative & innovation studio that was formed by ISLA MURRAY and MAXIMILLIAN KIRCHOFF.</p>
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
<style scoped>

h2 {
  text-transform: uppercase;
  font-weight: bold;
  margin: 10px 0;
}

h1 {
  font-size: 120px;
  margin: 0;
}

h3 {
  font-size: 36px;
  font-weight: normal;
  margin: 0;
}

#what-we-do p {
  margin: 100px 0;
}

#services div {
  width: 60vw;
  margin: 180px 0;
}

#services #design {
  margin-right: -20px;
  margin-left: auto;
}

#services ul {
  border-top: 3px solid #000;
  list-style: none;
  font-size: 36px;
  padding-top:20px;
  margin-top:25px;
  display: table;
  width: 100%;
}

#services ul > li {
  display: table-row;
  line-height: 1.5em;
}

#services ul > li:before {
  content: "\2014\a0";
  margin: 0 10px;
  display: table-cell; /* aha! */
  text-align: right;
}

#press ul {
  margin-top:40px;
  padding: 0;
  list-style-type: none;
}

#press ul li {
  border-top: solid 3px #000;
  padding: 20px 0;
}
#press a {
  text-decoration: none;
  color: #000;
}

#press a:hover {
  text-decoration: underline;
}

#press a .source {
  text-transform: uppercase;
}

#press a .source:after {
  content: "\2014\a0";
  margin: 0 5px 0 20px;
}
</style>
