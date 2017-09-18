<template>
  <div id="app">
    <header>
      <router-link to="/">
        <svg v-bind:class="{ black: menuButtonActive }" class="logo" width="510px" height="380px" viewBox="0 0 51 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs>
                <polygon id="path-1" points="0.0125700084 0.256428571 33.7865361 0.256428571 33.7865361 24.6783172 0.0125700084 24.6783172 0.0125700084 0.256428571"></polygon>
            </defs>
            <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Homepage" transform="translate(-42.000000, -31.000000)">
                    <g id="Logo" transform="translate(42.000000, 31.000000)">
                        <g id="Page-1">
                            <polygon id="Fill-1" fill="#000000" points="0 4 0 38 19 38 19 30.4785303 7.50739184 30.4785303 7.50739184 4"></polygon>
                            <g id="Group-4" transform="translate(17.000000, 0.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Clip-3"></g>
                                <path d="M12.503132,17.1739286 C14.9945959,16.8957143 16.9455649,14.5764286 16.662699,11.9457143 C16.3847402,9.36107143 13.9872144,7.52678571 11.4957505,7.80464286 C8.9590701,8.08785714 7.09888454,10.3975 7.3768433,12.9821429 C7.65970928,15.6128571 9.96645155,17.4571429 12.503132,17.1739286 M13.3023072,24.605 C6.73399794,25.3382143 0.803276289,20.4885714 0.0836680412,13.7964286 C-0.63103299,7.15 4.12370928,1.06107143 10.691668,0.327857143 C12.6394825,0.110357143 14.6871938,0.395357143 16.3672144,1.09571429 L33.7867814,9.19357143 L30.8119567,16.0646429 L23.9982866,12.8082143 C23.8633381,18.8017857 19.326967,23.9325 13.3023072,24.605" id="Fill-2" fill="#000000" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

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

a {
  color: #000;
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
}

header .menu-button.active .icon.diagonal {
  width: 29px;
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
  display: none;
}

header nav:not(.active) {
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

  header nav, header nav:not(.active) {
    position: absolute;
    left: 120px;
    bottom: 15px;
    top:auto;
    right:auto;
    background: transparent;
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
