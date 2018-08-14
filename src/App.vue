<template>
  <div id="app">
    <header>
      <router-link to="/">
        <svg v-bind:class="{ black: menuButtonActive }" class="logo" width="510px" height="380px" viewBox="0 0 51 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
      <button class="menu-button"
        v-bind:class="{ active: menuButtonActive }"
        v-on:click="menuButtonActive = !menuButtonActive">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav v-bind:class="{ active: menuButtonActive}">
        <ul>
          <li><router-link to="/" class='sm-only' v-on:click.native="closeMenu">Home</router-link></li>
          <li><router-link to="/work" v-on:click.native="closeMenu">Work</router-link></li>
          <li><router-link to="/sign-up" v-on:click.native="closeMenu">Newsletter</router-link></li>
          <li><a href="mailto:hi@lamasix.com" class='sm-only' v-on:click.native="closeMenu">Contact</a></li>
        </ul>
      </nav>

      <div id="contact-info" alt="Contact Information" class='sm-hidden'>
        <ul>
          <li><a href="mailto:hi@lamasix.com">hi@lamasix.com</a></li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <div id="footer">
      <div id="copyright">
        © LAMA SIX, LLC {{ currentYear }} – All rights reserved
      </div>
    </div>
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
  computed: {
    currentYear: function () {
      var date = new Date()
      return date.getFullYear()
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
      if (this.menuButtonActive) {
        this.menuButtonActive = false
      }
    }
  }
}
</script>

<style lang="scss">
@import "scss/variables";

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  font-family: $regular-sans-serif;
}

a {
  color: #000;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-bottom: 80px;
  min-height: 100vh;
}

header {
  display: block;
  width: 100%;
  text-align: left;
  position: relative;
  margin-bottom:40px;

  .logo {
    z-index:9;
    width: 40px;
    height: 30px;
    margin: 30px 0 0 30px;
    position: relative;

    @media (min-width: $md-width-min) {
      margin: 40px 0 0 40px;
    }
  }

  .menu-button {
    position: absolute;
    z-index:999;
    top: 0;
    right: 0;
    margin: 30px 25px 0 0;
    outline: none;
    background: transparent;
    border: none;

    @media (min-width: $sm-width-min) {
      display: none;
    }

    span {
      display: block;
      width: 23px;
      height: 2px;
      margin-bottom: 5px;
      position: relative;
      background: #000;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;

      &:first-of-type {
        transform-origin: 0% 0%;
      }
      &:nth-of-type(3) {
        transform-origin: 0% 100%;
      }
    }

    &.active span {
      &:first-of-type {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
      }

      &:nth-of-type(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(0, -1px);
      }
    }

  }

  ul {
    list-style: none;
    margin-top: 140px;

    @media (min-width: $sm-width-min) {
      display: inline;
    }

    li {
      margin: 30px 0;

      @media (min-width: $sm-width-min) {
        display: inline-block;
        margin: 0;
      }

      a {
        text-decoration: none;
        font-weight: bold;
        margin: 0;
        font-size: 20px;

        @media (min-width: $sm-width-min) {
          margin: 0 10px;
          font-size: 12px;

          &.router-link-active {
            border-bottom: 2px solid #000;
          }
        }
      }
    }
  }

  nav {
    text-transform: uppercase;
    position: fixed;
    z-index: 9;
    background-color: #8DFFBD;
    top:0;
    bottom:0;
    left:0;
    right:0;
    transition: all 200ms ease-in;

    &:not(.active) {
      right: 0;
      left: 100%;
      bottom:0;
      top:0;
    }

    @media (min-width: $sm-width-min) {
      display: block;

      &, &:not(.active) {
        position: absolute;
        left:60px;
        top:40px;
        bottom:auto;
        right:auto;
        background: transparent;

        @media (min-width: $md-width-min) {
          top: 50px;
        }
      }
    }
  }

  #contact-info {
    position: absolute;
    right: 35px;
    top: 40px;
    display: none;

    @media (min-width: $sm-width-min) {
      display: block;
    }

    @media (min-width: $md-width-min) {
      top: 50px;
      right: 40px;
    }
  }
}

section {
  margin: 0;
  overflow-x: hidden;

  @media (min-width: $sm-width-min) {
    margin: 0 60px;
  }
}

.sm-only {
  @media (min-width: $sm-width-min) {
    display: none;
  }
}

.sm-hidden {
  display: none;
  @media (min-width: $sm-width-min) {
    display: inherit;
  }
}

a.cta-button {
  text-decoration: none;
  font-size:12px;
  font-weight: 300;
  border: 2px solid #000;
  padding: 15px 30px;
  display: inline-block;
}
.bg-wrapper {
  transform: rotate(90deg);
  min-height:20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 1000px;
  z-index: -1;
  overflow:hidden;

  @media (min-width: $sm-width-min)  {
    right:100px;
    overflow-x:visible;
  }
}

#footer {
  z-index: 999;
  opacity: 0.4;
  font-size: 12px;
}

#copyright {
  position: absolute;
  bottom: 10px;
  text-align: center;
  left: 0;
  right: 0;
}

</style>
