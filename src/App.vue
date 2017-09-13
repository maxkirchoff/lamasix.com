<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img class="logo" src="./assets/lama-six-logo.svg">
      </router-link>
      <a class="menu-button"
        v-bind:class="{ active: menuButtonActive }"
        v-on:click="menuButtonActive = !menuButtonActive">
        <div class="icon diagonal x"></div>
      </a>
      <nav v-bind:class="{ active: menuButtonActive}">
        <ul>
          <li><router-link to="/" class='sm-only' v-on:click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" v-on:click="closeMenu">About</router-link></li>
          <li><router-link to="/work" v-on:click="closeMenu">Work</router-link></li>
          <li><router-link to="/contact" class='sm-only' v-on:click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
      <div id="contact-info" alt="Contact Information" class='sm-hidden'>
        <ul>
          <li><a href="mailto:hi@lamasix.com">hi@lamasix.com</a></li>
          <li><a href="tel:1-347-395-4304">+1 (347) 395-4304</a></li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuButtonActive: false
    }
  },
  watch: {
    '$route': function () {
      this.closeMenu()
    }
  },
  mounted: function () {
    let that = this
    window.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        that.closeMenu()
      }
    })
  },
  methods: {
    closeMenu: function () {
      console.log('what?')
      if (this.menuButtonActive) {
        this.menuButtonActive = false
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "europa", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  display: block;
  width: 100%;
  text-align: left;
  position: relative;
  margin-bottom:100px;
}

header .logo {
  z-index:99;
  width: 130px;
  height: auto;
  margin: 40px 0 0 50px;
  position: relative;
}

header .menu-button {
  z-index: 99;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #000;
  padding: 48px;
  cursor: pointer;
  transition: 0.5s;
}

header .menu-button div {
  width: 44px;
  height: 24px;
  background: #000;
  color: #000;
  box-shadow: -40px 0, -40px 40px, 40px 0, 40px -40px, 0 -40px, -40px -40px, 0 40px, 40px 40px;
  transform: none;
  transition: 0.5s;
  border-radius: 0.125rem;
}

header .menu-button.active .icon.diagonal {
  width: 28px;
  box-shadow: -48px 0, -28px 0, 48px 0, 28px 0, 0 -48px, 0 -28px, 0 48px, 0 28px;
  border-radius: 0;
}

header .menu-button.active .x {
  transform: rotate(45deg);
}

header .menu-button.active .collapse {
  box-shadow: -1rem 0, 0 0 transparent, 1rem 0, 0 0 transparent, 0 -1rem, 0 0 transparent, 0 1rem, 0 0 transparent;
  border-radius: 0;
}

header nav {
  text-transform: uppercase;
  position: fixed;
  z-index: 9;
  background-color: #8DFFBD;
  top:0;
  bottom:0;
  left:0;
  right:0;
  transition: all 200ms ease-in;
}

header #contact-info {
  position: absolute;
  right: 30px;
  bottom: 15px;
}

header nav:not(.active), header #contact-info {
  right: 0;
  left: 100vw;
  bottom:0;
  top:0;
}

header ul {
  list-style: none;
  margin-top: 200px;
}

header ul li {
  margin: 30px 0;
}

header ul li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  margin: 0 10px;
  font-size: 40pt;
}

header > * {
  display: inline;
}

section {
  margin: 0 60px;
}

.sm-hidden {
    display: none;
}

/* Desktop Only stuff! */
@media only screen
and (min-device-width : 800px) {
  .sm-hidden {
    display: inherit;
  }
  .sm-only {
    display: none !important;
  }

  header .menu-button {
    display: none;
  }

  header nav {
    position: absolute;
    left: 120px;
    bottom: 15px;
    top:auto;
    right:auto;
  }

  header nav, header #contact-info {
    display: block;
  }

  header .logo {
    width: 65px;
  }

  header ul, header ul li {
    display: inline;
  }

  header ul li a {
    margin: 0 10px;
    font-size: 10pt;
  }

}
</style>
