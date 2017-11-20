<template>
  <section id="sign-up">
		<div class="copy">
      <img src="/static/sign-up.gif" />
      <!-- Begin MailChimp Signup Form -->
      <div id="mc_embed_signup">
        <form action="//lamasix.us16.list-manage.com/subscribe/post?u=543c25805cf05076563093e23&amp;id=233ea62b4c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
        	<label for="mce-EMAIL">Email Address</label>
        	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" v-bind:placeholder="inputPlaceholder" v-on:focus="clearPlaceholder" v-on:blur="newPlaceholder" />
        </div>
        	<div id="mce-responses" class="clear">
        		<div class="response" id="mce-error-response" style="display:none"></div>
        		<div class="response" id="mce-success-response" style="display:none"></div>
        	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_543c25805cf05076563093e23_233ea62b4c" tabindex="-1" value=""></div>
            <div class="clear submit"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" :disabled="inputSubmitActive === false"></div>
            </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
			<p>
        Stay in touch by subscribing to our newsletter. This is for our partners, collaborators and friends. We will never give or sell your email to anyone else. We will send you notes, updates on our work, and the latest dad jokes.
			</p>
		</div>
	</section>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      inputPlaceholders: [
        'TYPE YOUR EMAIL HERE',
        'NO, REALLY. SIGN UP.',
        "LOOK, DON'T DO THAT AGAIN",
        'WHAT IF I BUY YOU A COFFEE?',
        'PLEEEEASE TYPE YOUR EMAIL!',
        "C'MON...",
        "IT'S SOOO EASY",
        'ONE FINGER AFTER THE OTHER',
        'EVERYONE IS DOING IT!',
        'WHATEVER',
        ':|',
        ':(',
        'I HATE YOU SO MUCH',
        "FINE. NOW YOU CAN'T SUBSCRIBE",
        "NEVERMIND. I'M SORRY...",
        'WHAT A PAIR WE MAKE',
        "OK, I'M DONE. FOR REAL."
      ],
      inputPlaceholder: '',
      inputPlaceholderCount: 0,
      inputSubmitActive: true
    }
  },
  mounted: function () {
    this.newPlaceholder()
  },
  methods: {
    newPlaceholder: function () {
      this.inputPlaceholder = this.inputPlaceholders[this.inputPlaceholderCount]

      if (this.inputPlaceholderCount === 13) {
        this.inputSubmitActive = false
      } else {
        this.inputSubmitActive = true
      }

      this.inputPlaceholderCount++

      if (this.inputPlaceholderCount > this.inputPlaceholders.length) {
        alert("Look what you did you little jerk! Ruining it for everyone. \n I don't need this kind of bologna.")
        window.location.href = 'http://niceonedad.com/'
      }
    },
    clearPlaceholder: function () {
      this.inputPlaceholder = ''
    }
  }
}
</script>

<style lang="scss">
@import "../scss/variables";
#sign-up {
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
        width: 40%;
        margin: 60px auto 0 -50px;
      }
      @media (min-width: $md-width-min) {
        margin: 100px auto 0 -100px;
      }
    }

    form {
      margin: 60px auto 0;
      max-width: 450px;

      #mc_embed_signup_scroll {
        @media (min-width: $sm-width-min) {
          .mc-field-group, .submit {
            float: left;
          }
          .mc-field-group {
            width: 60%;
            margin-right: 5%;
          }
          .submit {
            width: 35%;
          }
        }

        &:after {
          content: "";
          display: block;
          clear: both;
        }
      }

      label {
        display: none;
      }
      input {
        padding: 10px;
        font-size: 16px;
        display: block;
        outline: none;
        text-align: left;
        color: #000;
        width: 100%;
        border-radius: 0;

        @media (min-width: $sm-width-min) {
          width: 100%;
          margin: 0;
        }
        @media (min-width: $md-width-min) {
        }

        &[type="email"] {
          font-size: 14px;
          padding: 14px 20px 10px;
          background: #ededed;
          border: none;
          text-transform: lowercase;
          width: calc(100% - 40px);
          @media (min-width: $md-width-min) {
          }
        }

        &[type="submit"] {
          text-align: center;
          margin-top: 10px;
          border: 2px solid #000;
          background: #fff;
          text-transform: capitalize;
          font-size: 12px;
          -webkit-appearance: none;

          @media (min-width: $sm-width-min) {
            margin: 0;
            padding: 11px;
          }

          &[disabled="disabled"] {
            opacity: 0.1;
          }
        }
      }
      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color:    #000;
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
         color:    #000;
         opacity:  1;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
         color:    #000;
         opacity:  1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
         color:    #000;
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
         color:    #000;
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
  }
}
</style>
