<template>
  <section>
    <div class="hello">
      <p>LAMA SIX is a digital creative studio based in brooklyn. We build and execute bold new ideas and listen to hip hop.</p>
        <p>Hit us up <a href="mailto:hi@lamasix.com">hi@lamasix.com</a></p>
    </div>
    <div class="greeting-wrapper">
      <div id="greeting">
        {{ greeting }}
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
    this.dropInGreeting()
    let greeting = document.getElementById('greeting')
    let greetingStr = greeting.innerText.split('')
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
    dropInGreeting: function () {
      // $('#app').append(this.getGreeting())
    },
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
          return 'Good afternoon.'

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
<style scoped>
.hello {
  margin: 0 10vw;
  width: 80vw;
  position: absolute;
  bottom: 5vh;
  font-size:46px;
}

.greeting-wrapper {
  transform: rotate(90deg);
  min-height:20px;
  position: absolute;
  right: 200px;
  top: 50px;
  width: 800px;
  z-index: -1;
}

#greeting {
    text-align: left;
    font-size: 240px;
    font-family: "kepler-std",serif;
    font-weight: bold;
    color: #8DFFBD;
    transition: all 5s linear;
    animation: 1s letterSpacingImplode;
    line-height: 1;
    letter-spacing: 10px;
    position: relative;
    height: 800px;
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

/* Desktop Only stuff! */
@media only screen
and (min-device-width : 800px) {
  #greeting {
    font-size: 140px;
  }

  .hello {
    width: 300px;
    top: 60vh;
    left: 15vw;
    font-size:18px;
  }
}
</style>
