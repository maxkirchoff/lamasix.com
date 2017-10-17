<template>
  <section>
    <div class="hello">
      <p>LAMA SIX is a digital creative studio based in brooklyn. We build and execute bold new ideas and listen to hip hop.</p>
        <p>Hit us up <a href="mailto:hi@lamasix.com">hi@lamasix.com</a></p>
    </div>
    <div class="greeting-wrapper">
      <div id="greeting" v-html="greeting">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      greeting: this.getGreeting()
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/variables";

.hello {
  margin: 0 0 0 30px;
  width: 80%;
  position: absolute;
  bottom: 5vh;
  font-size:18px;
  line-height: 1.3;

  @media (min-width: $sm-width-min)  {
    width: 300px;
    bottom: 100px;
    left: 50px;
    font-size:18px;
  }

  @media (min-width: $sm-width-min) {
    left: 85px;
    bottom: 125px;
  }

  a {
    color: #000;
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
    top:30px;
    text-align: left;
    font-size: 140px;
    font-family: $bold-serif;
    font-weight: bold;
    color: #8DFFBD;
    transition: all 5s linear;
    animation: 1s letterSpacingImplode;
    line-height: .8em;
    position: relative;
    height: 800px;

    @media (min-width: $sm-width-min) {
      font-size: 180px;
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
</style>
