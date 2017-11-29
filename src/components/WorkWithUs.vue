<template>
  <section id="work-with-us">
		<div class="copy">
      <img src="/static/img/work-with-us.gif" />
      <div v-if="formSuccess">
        <p>Thanks for sending us your info, we will try to contact you ASAP.</p>
        <p>Until then, <a href="#" v-on:click="picard = true">watch this GIF</a> until your brain melts.</p>
      </div>
      <div v-else>
        <p v-if="letter" v-html="letter" id="letter">
        </p>
        <p v-else>
          We work with all kinds of people, from interesting new start-ups to established brands that want to do something fun and bold.<br /><br />
          Want to work with us?<br />Then write us a sweet note below.'
        </p>
        <div class="error" v-if="formError">
          <p>Sorry but there was an issue submitting your form. Please try again or email us directly at <a href="mailto:hi@lamasix.com">hi@lamasix.com</a></p>
        </div>
        <form id="join-form">
          <input required type="text" placeholder="Your name" v-model="name" />
          <input required type="email" placeholder="Your email" v-model="email" />
          <input type="text" placeholder="Your favorite vegetable" v-model="favoriteVeggie" />
          <select required v-model="desiredRole">
            <option disabled selected hidden value="">Your desired role</option>
            <option value="internships">Internship</option>
            <option value="freenlance work">Freelance</option>
            <option value="other">Other</option>
          </select>
          <autosize-textarea :value.sync="interests" placeholder="Your interests and/or expertise. i.e. design, development"></autosize-textarea>
          <autosize-textarea :value.sync="portfolio" placeholder="Your resume, CV, portfolio, work, etc."></autosize-textarea>
    			<button v-on:click="submitForm" v-bind:disabled="formSubmittable !== true">Submit</button>
    		</form>
      </div>
		</div>
    <div v-if="picard">
      <div class="overlay">
        <div class="img">
          <img src="/static/img/picard.gif" />
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import axios from 'axios'
import autosize from 'autosize'

const AutosizeTextarea = {
  props: ['value'],
  template: `<textarea @input="$emit('update:value', $event.target.value)">{{value}}</textarea>`,
  mounted: function () {
    autosize(this.$el)
  }
}

export default {
  name: 'main',
  components: {
    AutosizeTextarea
  },
  data () {
    return {
      name: '',
      email: '',
      favoriteVeggie: '',
      desiredRole: '',
      interests: '',
      portfolio: '',
      formProcessing: false,
      formError: false,
      injectionWarning: false,
      formSuccess: false,
      picard: false
    }
  },
  computed: {
    letter: function () {
      this.injectionGuard()

      let letter = ''

      if (this.name) {
        letter += "Hi, I'm " + this.name + ' and I think LAMA SIX is the coolest! '
        if (this.email) {
          letter += 'My email address is ' + this.email + '. '
        }
      } else {
        if (this.email) {
          letter += "Dear LAMA SIX, I don't have a name but my email address is " + this.email + '. '
        }
      }

      if (this.favoriteVeggie) {
        if (this.name || this.email) {
          if (this.favoriteVeggie.toLowerCase().includes('avocado') || this.favoriteVeggie.toLowerCase().includes('tomato')) {
            letter += 'I really love ' + this.favoriteVeggie + " even though it's not a vegetable, it's a fruit, and this really should have been my favorite veggie... a <i>real</i> vegetable not some fake fruit bullshit. "
          } else {
            letter += 'I love to eat ' + this.favoriteVeggie + ', all day, every day. '
          }
        } else {
          letter += "I don't have a name or an email, I just needed to tell you that I love " + this.favoriteVeggie + '. '
        }
      }

      if (this.desiredRole) {
        if (this.desiredRole === 'other') {
          letter += "<br /><br />Honestly, let's just get weird. 🤪"
        } else {
          letter += "<br /><br />I'd love to hear more about " + this.desiredRole + ' with you cool folks. '
        }
      }

      if (this.interests) {
        let interestsArr = this.interests.replace(/\n/g, ', ').split(',').filter(function (entry) {
          return entry.trim() !== ''
        })
        if (interestsArr.length > 0) {
          let interests = ''
          for (let i = 0; i < interestsArr.length; i++) {
            if (interestsArr[i] !== ',') {
              if (interests.length === 0) {
                interests = interestsArr[i]
              } else if (i === interestsArr.length - 1) {
                interests += ' and ' + interestsArr[i]
              } else {
                interests += ', ' + interestsArr[i]
              }
            }
          }
          letter += '<br /><br />Some of my interests and expertise are ' + interests + '. '
        } else {
          letter += "<br /><br />I'm just writing gibberish... I'M A CRAZY PERSON!"
        }
      }

      if (this.portfolio) {
        let portfolio = this.portfolio.split(',').filter(function (entry) {
          return entry.trim() !== ''
        }).join('\n')
        letter += "<br /><br />Here's a bunch of links about me: <ul><li>" + portfolio.replace(/\n/g, '</li><li>') + '</li></ul>'
      }
      return letter
    },
    formSubmittable: function () {
      if (!this.formProcessing && this.name && this.email) {
        return true
      }
      return false
    }
  },
  methods: {
    injectionGuard: function () {
      let textFields = ['name', 'email', 'favoriteVeggie', 'interests', 'portfolio']
      let self = this

      textFields.forEach(function (textField) {
        if (/<[a-z][\s\S]*>/i.test(self[textField])) {
          if (self.injectionWarning) {
            alert('You were warned.')
            window.location = 'https://www.youtube.com/watch?v=CduA0TULnow'
          } else {
            alert('Dude. Injecting code is not cool. \n\nConsider this a warning.')
            self.injectionWarning = true
          }
          self[textField] = ''
        }
      })
    },
    submitForm: function (event) {
      event.preventDefault()

      if (this.formSubmittable) {
        this.formProcessing = true

        const data = new FormData()
        data.append('name', this.name)
        data.append('email', this.email)
        data.append('favorite_veggie', this.favoriteVeggie)
        data.append('role', this.role)
        data.append('interests', this.interests)
        data.append('portfolio', this.portfolio)

        let self = this

        axios({
          method: 'post',
          url: 'https://script.google.com/a/lamasix.com/macros/s/AKfycbzHaDG-L9SpLy7B-5yRQix0GPp2qUHg6a-D1nmQDqBFVSh_W9U/exec',
          data: data
        }).then(function (response) {
          if (response['result'] === 'error') {
            self.formError = true
            console.log(response['error'])
          } else {
            console.log('reach here?')
            self.formSuccess = true
          }
          self.formProcessing = false
        }).catch(function (error) {
          self.formError = true
          console.log(error)
          self.formProcessing = false
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/variables";
#work-with-us {
  @media (min-width: $md-width-min) {
    width: 1000px;
    margin: 0 auto;
  }
  .copy {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    img {
      width: 80%;
      margin: 20px auto 0 -100px;
      @media (min-width: $sm-width-min) {
        margin: 60px auto 0 -50px;
      }
      @media (min-width: $md-width-min) {
        margin: 100px auto 0 -100px;
      }
    }

    #letter {
      font-family: $bold-serif;
    }

    form {
      margin: 60px auto 120px;
      max-width: 450px;
      text-align: left;

      input, select, textarea {
        font-family: $regular-sans-serif;
        padding: 10px;
        font-size: 16px;
        display: block;
        outline: none;
        text-align: left;
        color: #000;
        width: 100%;
        border-radius: 0;
        font-size: 14px;
        padding: 14px 20px 10px;
        background: #ededed;
        border: none;
        text-transform: lowercase;
        width: calc(100% - 40px);
        margin: 20px 0;
        resize: none;
        appearance: none;
      }

      select {
        width: 100%;
        font-weight: normal;

        option {
          font-weight: normal;
        }

        &:invalid,
        & option[value=""] {
          font-weight: bold;
        }
      }

      button {
        width: 30%;
        text-align: center;
        margin-top: 10px;
        border: 2px solid #000;
        background: #fff;
        text-transform: capitalize;
        font-size: 12px;
        appearance: none;
        border-radius: 0;
        padding: 11px;
        margin: 10px 0 0;

        @media (min-width: $sm-width-min) {
          margin: 0;
        }

        &[disabled="disabled"] {
          opacity: 0;
        }
      }

      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: #000;
          font-weight: bold;
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
         color: #000;
         opacity: 1;
         font-weight: bold;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
         color: #000;
         opacity: 1;
         font-weight: bold;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
         color: #000;
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
         color: #000;
      }
    }
  }
  p {
    margin-top: 40px;
    text-align: left;
    font-size: 16px;
    line-height: 1.4em;

    @media (min-width: $sm-width-min) {
      font-size: 14px;
      width: 450px;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (min-width: $md-width-min) {
    }

    a {
      border-bottom: 1px #000 solid;
    }
  }

  .error {
    p {
      padding: 20px;
      background: rgba(255,0,0,0.4)
    }
  }
  .overlay {
    position: fixed;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;

    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>
