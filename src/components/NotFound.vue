<template>
  <section id="not-found">
    <div id="magic-bgs">
      <div style="background-image:url('/static/404-1.jpg')"></div>
      <div style="background-image:url('/static/404-2.jpg')"></div>
      <div style="background-image:url('/static/404-3.jpg')"></div>
      <div style="background-image:url('/static/404-4.jpg')"></div>
    </div>
    <div id="floater">
      <h1>We can't find that.</h1>
      <p>Sorry, but we can't find what you're looking for.</p>
      <p>We know...this is awkward and frustrating.</p>
      <p>Maybe just check out some of our cool <router-link :to="{ name: 'Work' }">work</router-link> or <router-link :to="{ name: 'SignUp' }">sign-up</router-link> for our newsletter? :)</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      backgroundImages: [
        '/static/404-1.jpg',
        '/static/404-2.jpg',
        '/static/404-3.jpg',
        '/static/404-4.jpg'
      ]
    }
  },
  mounted: function () {
    this.magicBgImages()
  },
  methods: {
    magicBgImages: function (i) {
      if (i === undefined) {
        i = 0
      }

      let bgs = document.getElementById('magic-bgs').getElementsByTagName('div')

      bgs[i].style.zIndex = i + 1

      i++
      if (i >= bgs.length) {
        i = 0
        for (let j = 0; j < bgs.length; j++) {
          bgs[j].style.zIndex = 0
        }
      }

      let that = this
      setTimeout(function () {
        that.magicBgImages(i)
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/variables";
body {
  background-size: cover cover;
  background-position: top center;
  background-repeat: no-repeat;
}

#magic-bgs {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  div {
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
}
#floater {
  background: rgba(255,255,255,0.5);
  padding: 100px 50px;

  @media (min-width: $md-width-min) {
    width: 50%;
    margin: 0 auto;
    padding: 150px 100px;
  }

  h1 {
    font-family: $bold-serif;
    font-size: 30px;

    @media (min-width: $sm-width-min) {
      font-size: 50px;
    }
    @media (min-width: $md-width-min) {
      font-size: 80px;
      margin: 0;
    }
  }
  p {
    a {
      text-decoration: none;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
