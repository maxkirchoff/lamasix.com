<template>
  <section id="works">
    <div id="work-feature" v-if="$route.params.work_key">
      <div class="header-section">
        <div class="hero" v-if="works[$route.params.work_key].hero">
          <div v-if="works[$route.params.work_key].hero.type === 'macbookMovie' || works[$route.params.work_key].hero.type === 'iMacMovie'" v-bind:id="works[$route.params.work_key].hero.type">
            <img v-bind:src="works[$route.params.work_key].hero.container" />

            <img v-if="Array.isArray(works[$route.params.work_key].hero)" v-bind:src="works[$route.params.work_key].hero[0]" :srcset="`${works[$route.params.work_key].hero[0]} 600w, ${works[$route.params.work_key].hero[1]} 1000w`"/>
            <img v-else v-bind:src="works[$route.params.work_key].hero.gif" />

          </div>
          <img v-else-if="Array.isArray(works[$route.params.work_key].hero)" v-bind:src="works[$route.params.work_key].hero[0]" :srcset="`${works[$route.params.work_key].hero[0]} 600w, ${works[$route.params.work_key].hero[1]} 1000w`"/>
          <img v-else v-bind:src="works[$route.params.work_key].hero" />
        </div>
        <h1>
          <span class="type" v-if="works[$route.params.work_key].type">
            {{ works[$route.params.work_key].type }}:
          </span>
          {{ works[$route.params.work_key].name }}
        </h1>
        <div class="description" v-html="works[$route.params.work_key].long_description">
        </div>
        <div class="cta" v-if="works[$route.params.work_key].cta_text">
          <a v-bind:href="works[$route.params.work_key].cta_url" target="_blank">
            {{ works[$route.params.work_key].cta_text }}
          </a>
        </div>
      </div>
      <div class="assets">
        <div v-for="(asset, type) in works[$route.params.work_key].assets">
          <div v-if="isNaN(type) && type.includes('group')" class="group" v-bind:class="type">
            <div v-for="(child_asset, child_type) in asset">
              <div v-if="isNaN(child_type) && child_type.includes('special')" class="special">
                <div v-if="child_asset.child_type === 'iphoneScroll'" id="iphone-scroll">
                  <img v-bind:src="asset.iphone" id="iphone-container" />
                  <div id="iphone-content-wrapper">
                    <img v-if="Array.isArray(child_asset.content)" v-bind:src="child_asset.content[0]" :srcset="`${child_asset.content[0]} 600w, ${child_asset.content[1]} 1000w`" />
                    <img v-else v-bind:src="child_asset.content" id="iphone-content" />
                  </div>
                </div>
                <div v-else-if="child_asset.type === 'macbookMovie' || child_asset.type === 'iMacMovie'" v-bind:id="child_asset.child_type">
                  <img v-bind:src="child_asset.container" id="movieContainer" />
                  <img v-if="Array.isArray(child_asset.gif)" v-bind:src="child_asset.gif[0]" :srcset="`${child_asset.gif[0]} 600w, ${child_asset.gif[1]} 1000w`" />
                  <img v-else v-bind:src="asset.gif" id="movieGif" />
                </div>
                <div v-else-if="child_asset.type === 'text'" class="text"  v-html="child_asset.content">
                  what
                </div>
              </div>
              <img v-else-if="Array.isArray(child_asset)" v-bind:src="child_asset[0]" :srcset="`${child_asset[0]} 600w, ${child_asset[1]} 1000w`" />
              <img v-else v-bind:src="child_asset" />
            </div>
          </div>
          <div v-else-if="isNaN(type) && type.includes('special')" class="special">
            <div v-if="asset.type === 'iphoneScroll'" id="iphone-scroll">
              <img v-bind:src="asset.iphone" id="iphone-container" />
              <div id="iphone-content-wrapper">
                <img v-if="Array.isArray(asset.content)" v-bind:src="asset.content[0]" :srcset="`${asset.content[0]} 600w, ${asset.content[1]} 1000w`" />
                <img v-else v-bind:src="asset.content" id="iphone-content" />
              </div>
            </div>
            <div v-else-if="asset.type === 'macbookMovie' || asset.type === 'iMacMovie'" v-bind:id="asset.type">
              <img v-bind:src="asset.container" id="movieContainer" />
              <img v-if="Array.isArray(asset.gif)" v-bind:src="asset.gif[0]" :srcset="`${asset.gif[0]} 600w, ${asset.gif[1]} 1000w`" />
              <img v-else v-bind:src="asset.gif" id="movieGif" />
            </div>
            <div v-else-if="asset.type === 'text'" class="text"  v-html="asset.content">
              what
            </div>
          </div>
          <img v-else-if="Array.isArray(asset)" v-bind:src="asset[0]" :srcset="`${asset[0]} 600w, ${asset[1]} 1000w`" />
          <img v-else v-bind:src="asset" />
        </div>
      </div>
      <div v-if="Array.isArray(works[$route.params.work_key].background_image)" id="work-bg" class="work-bgs">
        <div v-for="(bg_image, key) in works[$route.params.work_key].background_image" class="work-bg" v-bind:style="{ backgroundImage: 'url(' + bg_image  + ')' }">
        </div>
      </div>
      <div v-else id="work-bg" v-bind:style="{ backgroundImage: 'url(' + works[$route.params.work_key].background_image  + ')' }">
      </div>
    </div>
    <div id="work-list">
      <ul>
        <li v-for="(work, work_key) in works">
          <router-link :to="'/work/' + work_key" v-scroll-to="'body'">
            <div class="work-link-wrapper">
              <img v-bind:src="work.thumbnail" />
              <div class="client-info">
                <span class="type" v-if="work.type">{{ work.type }}: </span>
                <span class="name">{{ work.name }}</span>
                <span class="short-description" v-if="work.short_description">{{ work.short_description }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      works: {
        gen_z_studio: {
          name: 'Gen Z Studio, a think tank',
          thumbnail: require('../assets/work/gen-z-studio.png'),
          short_description: 'Generation Z and young Millenial marketing strategy.',
          long_description: '<p>Gen Z Studio is a think tank and service offering specifically targeted at Generation Z and young Millennials. We specialize in organizations and companies that want to connect to the emerging youth. We are full-service in that we formulate the brand or product marketing strategy and can execute & launch that strategy for you.</p><ul><li>Product Marketing Strategy</li><li>Guide the development and execution of product marketing campaigns</li><li>Brand Affinity</li><li>Develop and execute the future-proof brand identity and voice for Generation Z</li><li>Brand or Product Auditing/Calibration</li></ul>',
          hero: require('../assets/work/gen-z-hero.png'),
          cta_text: 'Work With Us',
          cta_url: 'mailto:hi@lamasix.com',
          background_image: '',
          assets: {
            group1: {
              image1: [
                require('../assets/work/genz-sdl-slideshow.gif'),
                require('../assets/work/genz-sdl-slideshow_2x.gif')
              ],
              special1: {
                type: 'text',
                content: "<h2>Case Study: Shoe Design Lab</h2><p>Shoe Design Lab is an immersive experience for young adults and children on the ideation, design and prototyping of sneakers. It was created by LAMA SIX as part of Berkeley Carroll School's STEAM Fair in 2018.</p><p>The core goals of this project was to create a workshop to educate and empower kids to participate in research & development, visual design and prototyping in the creation of their own. The process includes stations for hands-on testing of various materials, a packet and guidance on design thinking to guide their ideation, and a design studio space setup to produce and capture their ideas.</p><p>The workshop launched at Berkeley Carroll School's STEAM Fair on February 10th, 2018. It was wildly successful with kids and parents alike, garnering attention and participants for the length of the fair.</p><p>If you would like to learn more about the workshop, host the workshop, and sponsor future workshops, please contact <a href='mailto:hi@lamasix.com'>hi@lamasix.com</a></p>"
              }
            },
            group2: [
              require('../assets/work/genz-sdl-1.png'),
              require('../assets/work/genz-sdl-2.png')
            ],
            special2: {
              type: 'text',
              content: '<h2>The average Gen Z person has an attention span of <span id="attention-span">6</span> seconds. You must engage, and do it fast.</h2>'
            }
          },
          onload_methods: [
            this.attentionSpan
          ]
        },
        arsenal: {
          name: 'Arsenal',
          type: 'client',
          thumbnail: require('../assets/work/arsenal.png'),
          short_description: 'Creative strategy, branding, visual identity and app design for a new app in the social media and beauty space.',
          long_description: '<p>Arsenal is a new way to find and share your favorite beauty products with friends you trust and admire. It connects like-minded friends around beauty and enables discovery & commerce through recommendations by trusted influencers within your network.</p><p>LAMA SIX led creative & marketing strategy, branding, visual identity, as well as all visual, app & web design.</p>',
          hero: require('../assets/work/arsenal-hero.png'),
          cta_text: 'View App',
          cta_url: 'https://app.myarsenal.co',
          background_image: require('../assets/work/arsenal-bg.jpg'),
          assets: {
            image1: require('../assets/work/arsenal-1.png'),
            image2: require('../assets/work/arsenal-2.png'),
            imagebg: require('../assets/work/arsenal-lower-bg.png'),
            group1: {
              image3: require('../assets/work/arsenal-3.png'),
              image4: require('../assets/work/arsenal-4.png')
            },
            group2: {
              image5: require('../assets/work/arsenal-8.png'),
              image7: require('../assets/work/arsenal-7.png')
            }
          }
        },
        wdypb: {
          name: 'Where Does Your Penis Belong',
          type: '',
          thumbnail: require('../assets/work/wdypb.png'),
          short_description: "A children's book for grown-ass men.",
          long_description: '<p>This project was a collaboration with Ashley Simon and Allison Gore. It was born out of our collective need to process the spate of shocking sexual assault allegations that have unfolded in 2017. Feeling a desperate need for some comedic relief in the wake of so much trauma and outrage, Where Does Your Penis Belong? was a therapeutic exercise for us and we hope it’s a therapeutic read for many others.</p><p>This project got a bit of press as well.<ul><li><a href="http://www.newsweek.com/where-does-your-penis-belong-childrens-book-grown-ass-men-750147" target="_blank">Newsweek</a></li><li><a href="https://www.pastemagazine.com/articles/2017/12/where-does-your-penis-belong-the-perfect-gift-for.html" target="_blank">PASTE Magazine</a></li><li><a href="https://www.thecut.com/2017/12/handy-book-asks-men-where-their-penis-belongs.html" target="_blank">The Cut</a></li></ul></p>',
          hero: require('../assets/work/wdypb-hero.png'),
          cta_text: 'View Website',
          cta_url: 'http://wdypb.com',
          assets: {
            special: {
              type: 'macbookMovie',
              gif: require('../assets/work/wdypb-1.gif'),
              container: require('../assets/work/macbook-empty.png')
            },
            special1: {
              type: 'text',
              content: "<p><b>Interactive website and game</b></p><p>To promote the launch of the book and provide delight to the fans, we produced an interactive quiz for anyone curious about Where Does Your Penis Belong?. The quiz and website feature Allison Gore's beautiful illustrations, the collective comedy of all collaborators and works across mobile and desktop devices.</p><p>The interactive website was designed and built by LAMA SIX using the content of the book.</p>"
            },
            image1: require('../assets/work/wdypb-2.png'),
            special2: {
              type: 'text',
              content: '<p><b><a href="http://www.blurb.com/b/8435234-where-does-your-penis-belong" target="_blank">Print book</a></b></p><p>As a collaboration, the book was written by all three women, illustrated by Allison Gore, art directed & designed by Isla Murray and written by Ashley Simon. After much thoughtful delliberation and laughter, the book was a raging success for us. For any press inquires about the book, please email <a href="maito:pants@wheredoesyourpenisbelong.com">pants@wheredoesyourpenisbelong.com</a>.</p><p>The book is a collaboration of Ashley Simon, Isla Murray and Allison Gore.</p>'
            }
          }
        },
        leanstartup: {
          name: 'Lean Startup',
          type: 'client',
          thumbnail: require('../assets/work/leanstartup.png'),
          short_description: 'Popular tech education Identity and website redesign.',
          long_description: "<p>This project involved a large repositioning and redesign of Lean Startup's Identity. It included their logo and visual language for the core and subdivision brands, as well as design and development of their main website and conference website.</p><p>This was a collaboration with Melissa Small of <a href='http://creativegeneralists.io/' target='_blank'>Creative Generalists</a>, where we worked together on all design and development aspects.</p>",
          hero: {
            type: 'iMacMovie',
            gif: require('../assets/work/leanstartup-hero.gif'),
            container: require('../assets/work/imac-empty.png')
          },
          cta_text: 'View Website',
          cta_url: 'http://leanstartup.co',
          background_image: require('../assets/work/leanstartup-bg.png'),
          assets: [
            require('../assets/work/leanstartup-1.png'),
            require('../assets/work/leanstartup-2.png'),
            require('../assets/work/leanstartup-3.png')
          ],
          onload_methods: [
            this.iphoneScroll
          ]
        },
        monegraph: {
          name: 'Monegraph',
          type: 'client',
          thumbnail: require('../assets/work/monegraph.png'),
          short_description: 'Mobile-only ephemeral web platform for influencer driven e-commerce.',
          long_description: '<p>This is a mobile-only, influencer-centric platform of ephemeral web and e-commerce experiences. We worked with Monegraph from ideation to launch, to enable brands to work with influencers in easily creating and distributing original, compelling content across their social channels. This seamlessly drove their fans to unique, short-lived digital experiences and conversions.</p><p>We  also crafted the initial campaign in partnership with <a href=”http://graintheory.bigcartel.com/” target=”_blank”>Grain Theory</a>, a US-based Kendama brand. The Grain Theory campaign sold out of product in 10 minutes and had a 40% opt-in rate for SMS. The experience was financially successful and loved by their core audience.</p>',
          hero: [
            require('../assets/work/monegraph-hero_1x.png'),
            require('../assets/work/monegraph-hero_2x.png')
          ],
          cta_text: 'View Campaign',
          cta_url: 'http://graintheory.mcast.io',
          background_image: require('../assets/work/monegraph-bg.png'),
          assets: {
            image1: require('../assets/work/monegraph-1.png'),
            image2: require('../assets/work/monegraph-2.png'),
            special: {
              type: 'iphoneScroll',
              iphone: require('../assets/work/iphone-empty.png'),
              content: require('../assets/work/monegraph-scroll.jpg')
            },
            image4: require('../assets/work/monegraph-4.png')
          },
          onload_methods: [
            this.iphoneScroll
          ]
        },
        prompt_me: {
          name: 'Prompt Me XYZ',
          type: 'project',
          thumbnail: require('../assets/work/prompt-me.png'),
          short_description: 'A new 20 minute creative exercise every day.',
          long_description: '<p>An exercise in daily creativity, this releases a new 20 minute creative exercise every day. It is both a web app and a community of people who submit their prompted creations to be shared.</p><p>We designed the identity and interface of the promptme.xyz site and social community, and collaborated with <a href=”http://zahraism.com” target=”_blank”>Zahra Jabini</a> to build and launch the site.</p>',
          hero: {
            type: 'macbookMovie',
            gif: require('../assets/work/prompt-me.gif'),
            container: require('../assets/work/macbook-empty.png')
          },
          cta_text: 'Visit Website',
          cta_url: 'http://promptme.xyz',
          background_image: require('../assets/work/prompt-me-bg.png'),
          assets: [
            require('../assets/work/prompt-me-1.png'),
            require('../assets/work/prompt-me-2.png'),
            require('../assets/work/prompt-me-3.png')
          ]
        },
        fries: {
          name: 'Fries',
          type: 'project',
          thumbnail: require('../assets/work/fries.jpg'),
          short_description: 'A slack community of supportive, creative ladies.',
          long_description: '<p>Fresh. Rad. Interesting. Encouraging. Sisters.<br /> We created Fries as a community of women to support and promote personal and professional development while maintaining the playful and creative inspiration we all need.</p><p>We designed, built and launched the identity, community and all supporting technology - as well as actively manage and moderate the community. This community is primarily on Slack and across social channels, however there have now been regional meet-ups in San Francisco and New York.</p>',
          hero: [
            require('../assets/work/fries-hero_1x.png'),
            require('../assets/work/fries-hero_2x.png')
          ],
          cta_text: 'Visit Website',
          cta_url: 'http://fries.social',
          background_image: '',
          assets: {
            image1: [
              require('../assets/work/fries-1_1x.jpg'),
              require('../assets/work/fries-1_2x.jpg')
            ],
            image2: require('../assets/work/fries-2.png'),
            special: {
              type: 'macbookMovie',
              gif: [
                require('../assets/work/fries-signup_1x.gif'),
                require('../assets/work/fries-signup_2x.gif')
              ],
              container: require('../assets/work/macbook-empty.png')
            },
            image4: [
              require('../assets/work/fries-4_1x.jpg'),
              require('../assets/work/fries-4_2x.jpg')
            ]
          }
        },
        the_sum: {
          name: 'The SUM',
          type: 'project',
          thumbnail: require('../assets/work/the-sum.jpg'),
          short_description: 'A two-day conference designed to help guests reimagine creative possibilities.',
          long_description: '<p>The Sum was a two-day conference in San Francisco designed to have guests reimagine creative possibilities for themselves and their cities, organized by The Bold Italic.</p><p>This project was led by, and done in collaboration with, Melissa Small of <a href="http://creativegeneralists.io/" target="_blank">Creative Generalists</a>. It included event design, brand identity, visual system design, photography and digital experience design & development.</p><p>Leveraging the idea of exquisite corpse, we created a visual system and collaged photography used throughout all promotional materials. We also designed the responsive website and produced environmental graphics and shwag for the event itself.</p>',
          hero: [
            require('../assets/work/the-sum-hero_1x.png'),
            require('../assets/work/the-sum-hero_2x.png')
          ],
          cta_text: 'Visit Website',
          cta_url: 'http://thesum.lamasix.com',
          background_image: '',
          assets: [
            [
              require('../assets/work/thesum-3_1x.jpg'),
              require('../assets/work/thesum-3_2x.jpg')
            ],
            [
              require('../assets/work/thesum-2_1x.jpg'),
              require('../assets/work/thesum-2_2x.jpg')
            ],
            require('../assets/work/thesum-1.jpg')
          ]
        },
        romper: {
          name: 'Romper',
          type: '',
          thumbnail: require('../assets/work/romper.png'),
          short_description: 'A site for a new generation of women figuring out what motherhood means for them.',
          long_description: '<p>Created while working with Bustle Digital Group, this site focuses on Millennial motherhood and chronicles the crazy adventure in a thoughtful, honest and fun way.</p><p>Isla Murray, co-founder of LAMA SIX, served as Creative Director and worked on branding, identity design, web design as well as built the visual language from the ground up.</p>',
          hero: [
            require('../assets/work/romper-hero_1x.gif'),
            require('../assets/work/romper-hero_2x.gif')
          ],
          background_image: require('../assets/work/romper-bg.png'),
          cta_text: 'View Website',
          cta_url: 'https://www.romper.com',
          assets: [
            require('../assets/work/grow-up-together.png'),
            [
              require('../assets/work/romper-1_1x.png'),
              require('../assets/work/romper-1_2x.png')
            ],
            require('../assets/work/romper-2.png')
          ]
        },
        levis: {
          name: "City Guide for Levi's",
          type: 'project',
          thumbnail: require('../assets/work/levis.jpg'),
          short_description: 'Guides of San Francisco neighborhoods for Levi’s Senior Global Marketing team.',
          long_description: '<p>A series of neighborhood guides that Levi’s used to introduce their Senior Global Marketing team to the company’s hometown of San Francisco. The guides put a spotlight on San Francisco’s most exciting areas and provided an in-depth exploration of the culture and makers thriving within each. The final products were printed pieces with expandable maps that could easily be referenced on the go.</p><p>We built these guides from ideation to execution, designing the entire book as well as creating content with our partners at The Bold Italic.</p>',
          hero: require('../assets/work/levis-hero.png'),
          assets: [
            [
              require('../assets/work/levis-1_1x.jpg'),
              require('../assets/work/levis-1_2x.jpg')
            ],
            require('../assets/work/levis-2.png'),
            [
              require('../assets/work/levis-3_1x.jpg'),
              require('../assets/work/levis-3_2x.jpg')
            ],
            [
              require('../assets/work/levis-4_1x.jpg'),
              require('../assets/work/levis-4_2x.jpg')
            ],
            [
              require('../assets/work/levis-5_1x.jpg'),
              require('../assets/work/levis-5_2x.jpg')
            ]
          ]
        },
        interactive_flowcharts: {
          name: 'Interactive Flowcharts',
          type: 'project',
          thumbnail: require('../assets/work/interactive-flowcharts.png'),
          short_description: 'A beautiful new way to engage with content and tell stories.',
          long_description: '<p>The Interactive Flowcharts offer an exciting and compelling platform for content and story-telling beyond static images, text articles or cutesy magazine quizzes. The platform offers a content creator the chance to make interactive and rich experiences for the content they are working with.</p><p>The platform has won a <a href="https://www.webbyawards.com/winners/2017/websites/website-features-and-design/best-visual-design-function/bustles-interactive-flowcharts/" target="_blank">Webby for "Best Visual Design - Function"</a> as well as other <a href="https://www.designrush.com/best-design/bustle" target="_blank">awards and mentions</a>. Originally designed & built in collaboration with the talented <a href="http://work.tetto.org/" target="_blank">Donald Tetto</a>, this platform for flowcharts was created and launched with Bustle.com.</p>',
          hero: require('../assets/work/interactive-flowcharts-hero.png'),
          background_image: '',
          cta_text: 'View Flowcharts',
          cta_url: 'https://www.bustle.com/flowcharts',
          assets: [
            require('../assets/work/interactive-flowcharts-1.png'),
            require('../assets/work/interactive-flowcharts-2.png')
          ]
        },
        ogx: {
          name: 'OGX',
          type: 'Client',
          thumbnail: require('../assets/work/ogx.jpg'),
          short_description: 'A fresh look for OGX as branded content on Bustle.',
          long_description: '<p>As part of an OGX campaign for Bustle.com, we managed art direction of visuals across photoshoots for multiple pieces of branded content and for a custom event.</p><p>Photographs by <a href="http://www.ashleybatz.com/" target="_blank">Ashley Batz</a>.</p>',
          cta_text: 'View Campaign',
          cta_url: 'https://www.bustle.com/p/heres-what-happened-when-we-transformed-a-nyc-hotspot-into-a-tropical-oasis-70141',
          background_image: '',
          assets: {
            image1: [
              require('../assets/work/ogx-1_1x.jpg'),
              require('../assets/work/ogx-1_2x.jpg')
            ],
            image2: [
              require('../assets/work/ogx-2_1x.jpg'),
              require('../assets/work/ogx-2_2x.jpg')
            ],
            image3: [
              require('../assets/work/ogx-3_1x.jpg'),
              require('../assets/work/ogx-3_2x.jpg')
            ],
            image4: [
              require('../assets/work/ogx-4_1x.jpg'),
              require('../assets/work/ogx-4_2x.jpg')
            ]
          }
        },
        please: {
          name: 'Please',
          type: '',
          thumbnail: require('../assets/work/please.png'),
          short_description: 'A place for beauty, realness, and humor to come together to form all of those IRL moments.',
          long_description: '<p>A celebration of real women who are having fun with beauty, makeup, and trends. A community that shares photos of real ladies having fun with new styles and showcasing the "ones they love best". Strong women who use beauty to express themselves and are fighting the old beauty standards.</p><p>Isla Murray, co-founder of LAMA SIX, led Bustle’s design team from ideation to launch of the community, with on-going support for content and community brand.</p>',
          cta_text: 'View Community',
          cta_url: 'https://www.instagram.com/please/',
          hero: require('../assets/work/please-hero.png'),
          background_image: '',
          assets: {
            image1: require('../assets/work/please-1.jpg'),
            image2: require('../assets/work/please-2.png'),
            image3: require('../assets/work/please-3.png'),
            image4: require('../assets/work/please-4.jpg')
          }
        },
        bustle: {
          name: 'Bustle',
          type: '',
          thumbnail: require('../assets/work/bustle.jpg'),
          short_description: 'Rebrand and visual identity of the largest publication for millennial women.',
          long_description: '<p>"Bustle is for & by women who are moving forward as fast as you are." As a large publication for women, specifically millennial, Bustle leads with thoughtful content, bold design and brave ideas.</p><p>Isla Murray, co-founder of LAMA SIX, served as the Creative Director through a massive rebrand. She managed the development of Bustle’s visual voice, logomark, site and app designs.',
          cta_text: 'View Website',
          cta_url: 'https://www.bustle.com',
          hero: require('../assets/work//bustle-hero.png'),
          background_image: '',
          assets: {
            image1: [
              require('../assets/work/bustle-1_1x.png'),
              require('../assets/work/bustle-1_2x.png')
            ],
            image2: require('../assets/work/bustle-2.png'),
            special1: {
              type: 'text',
              content: '<p>"A good place to start is Bustle‘s new logo, an evolution of its former logo, that was in a simple all-caps sans serif font. This version is designed with softer edges to feel warmer and friendlier. It is at an angle to represent movement and energy. The word is underlined, as if to say that it is getting right to the point." — <a href="https://www.fastcompany.com/3063755/exclusive-the-women-behind-the-new-bustle-on-reinventing-womens-media" target="_blank">Fast Comapny</a></p>'
            },
            image3: require('../assets/work/bustle-3.png'),
            special2: {
              type: 'text',
              content: '<p>"The stock photos don’t represent the people reading our articles. So we made our own" — <a href="https://www.racked.com/2015/11/5/9648598/stock-photography-sexist-getty-images-shutterstock" target="_blank">Isla, as quoted on Racked</a></p>'
            },
            image4: require('../assets/work/bustle-4.jpg'),
            image5: [
              require('../assets/work/bustle-5_1x.jpg'),
              require('../assets/work/bustle-5_2x.jpg')
            ]
          }
        }
      }
    }
  },
  mounted: function () {
    if (this.$route.params.work_key) {
      this.addWorkStyles(this.$route.params.work_key)
      this.triggerOnloadMethods(this.$route.params.work_key)
    }
  },
  beforeDestroy () {
    this.removeWorkStyles()
  },
  watch: {
    '$route': function () {
      if (this.$route.params.work_key) {
        this.addWorkStyles(this.$route.params.work_key)
        let that = this
        setTimeout(function () {
          that.triggerOnloadMethods(that.$route.params.work_key)
        }, 1000)
      } else {
        this.removeWorkStyles(this.$route.params.work_key)
      }
    }
  },
  methods: {
    attentionSpan: function () {
      let el = document.getElementById('attention-span')
      if (this.elInViewport(el)) {
        const attentionVal = parseInt(el.innerText)
        let that = this
        for (let i = 1; i <= attentionVal; i++) {
          setTimeout(function () {
            el.innerText = attentionVal - i
          }, i * 1000)
          if (i === attentionVal) {
            setTimeout(function () {
              el.innerText = attentionVal
              that.attentionSpan()
            }, i * 2000)
          }
        }
      }
    },
    elInViewport: function (el) {
      const rect = el.getBoundingClientRect()
      let elemTop = rect.top
      let elemBottom = rect.bottom
      let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
      return isVisible
    },
    addWorkStyles: function (workKey) {
      if (workKey) {
        this.addBodyTheme(workKey)
      }
    },
    removeWorkStyles: function () {
      this.removeBodyTheme()
    },
    addBodyTheme: function (workTheme) {
      document.body.dataset.theme = workTheme
      if (this.works[this.$route.params.work_key].background_image) {
        document.body.style.backgroundImage = "url('" + this.works[this.$route.params.work_key].background_image + "')"
      } else {
        document.body.style.backgroundImage = ''
      }
    },
    removeBodyTheme: function () {
      document.body.dataset.theme = ''
      document.body.style.backgroundImage = ''
    },
    iphoneScroll: function (oldTop) {
      let iphoneContent = document.getElementById('iphone-content')
      if (iphoneContent) {
        let newTop = 0
        let maxTop = 230
        let minTop = 15

        if (oldTop < 230) {
          newTop = oldTop + Math.random() * ((maxTop - oldTop) - minTop) + minTop
        }
        let that = this
        setTimeout(function () {
          iphoneContent.style.top = '-' + newTop + '%'
          that.iphoneScroll(newTop)
        }, 1500)
      }
    },
    triggerOnloadMethods: function (workKey) {
      if (this.works[workKey].onload_methods !== undefined && this.works[workKey].onload_methods.length > 0) {
        let onloadMethods = this.works[workKey].onload_methods
        for (let i = 0; i < onloadMethods.length; i++) {
          onloadMethods[i]()
        }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/variables";

a {
  color: #000;
  text-decoration: none;
}

#works {
  overflow-x: visible;
}

#work-feature {
  clear: both;
  padding: 0 20px 80px;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  @media (min-width: $md-width-min) {
    width: 1000px;
    margin: 0 auto;
  }

  .hero {
    margin-top: -100px;

    @media (min-width: $sm-width-min) {
      margin-top: 0;
      float: right;
      width: 50%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    padding-top: 20px;
    text-transform: uppercase;
    font-size: 20px;

    @media (min-width: $sm-width-min) {
      padding-top: 100px;
      color: #000;
      width:30%;
    }
  }

  h2 {
    font-size: 20px;
    font-family: $bold-sans-serif;
  }

  .description {

    @media (min-width: $sm-width-min) {
      width:40%;
    }

    p, ul {
      line-height: 1.3em;
      font-size: 16px;
    }
    a {
      border-bottom: 1px solid #000;
    }
  }

  .cta {
    padding-top: 10px;
    a {
      width: 50%;
      display: block;
      border: 2px solid #000;
      text-decoration: none;
      text-align: center;
      padding: 10px 40px;
      margin: 40px auto;
      font-weight: bold;

      @media (min-width: $sm-width-min) {
        margin: 50px 0 0;
        width: 15%;
        min-width: 150px;
        padding: 10px auto;
      }
    }
  }

  .assets {
    clear: both;

    @media (min-width: $sm-width-min) {
      margin-top: 100px;
    }

    > div {
      display: inline-block;
      width: 40%;
      margin: 20px 5%;

      &:nth-of-type(n+3) {
        width: 90%;
      }

      .text {
        line-height: 1.3em;
        margin-left: 5%;
        margin-right: 5%;
        a {
          border-bottom: 1px solid #000;

        }
      }

      @media (min-width: $sm-width-min) {
        float: left;
        width: 45%;
        margin: 100px 10% 0 0;

        &:nth-of-type(n) {
          width: 45%;
        }
        &:nth-of-type(2n) {
          margin-right: 0;
        }

      }
      @media (min-width: $md-width-min) {
        width: 20%;
        margin: 50px 5% 0 0;

        &:nth-of-type(n) {
          width: 20%;
          margin-right: 5%;
        }
        &:nth-of-type(4) {
          margin-right: 0;
        }
      }

      img {
        vertical-align: top;
      }
    }

    img {
     width: 100%;
    }
  }
  #macbookMovie {
    position: relative;
    overflow: hidden;

    img:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 78%;
      margin: 4% 11%;
    }
  }
  #iMacMovie {
    position: relative;
    overflow: hidden;

    img:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 92%;
      margin: 4% 4%;
    }
  }
}

#work-feature + #work-list {
  padding-top: 60px;
  padding-bottom: 100px;
}

#work-list {
  clear: both;
  background: #fff;
  padding: 0 30px;
  margin: 0;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  @media (min-width: $sm-width-min) {
    margin: 100px -60px 0;
  }

  @media (min-width: $md-width-min) {
    padding-left: 20%;
    padding-right: 20%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    @media (min-width: $sm-width-min) {
      padding: 0;
    }

    li {
      display: block;
      margin-bottom: 50px;
      width:100%;

      @media (min-width: $sm-width-min) {
        float: left;
        width: 30%;
        margin-right: 5%;

        &:nth-of-type(3n) {
          margin-right: 0;
        }

      }

      a {
        display:block;

        @media (min-width: $sm-width-min) {
          position: relative;

          &:hover {
            background-color: $l6-green;
            transition: all 200ms;
            img {
              opacity: 0;
              transition: all 300ms;
            }

            .client-info {
              opacity: 1;
            }
          }
        }

        img {
          width: 100%;
          display: block;
        }

        .client-info {
          font-size: 16px;
          margin: 10px 0 0;

          @media (min-width: $sm-width-min) {
            font-size: 14px;
            position: absolute;
            top: 0;
            opacity: 0;
            transition: all 300ms;
            padding: 10px 15px;
          }

          .type, .name {
            font-weight: bold;
          }

          .type {
            text-transform: capitalize;
          }

          .name:after {
            content:"\2022";
            padding: 0 2px 0 7px;
            @media (min-width: $sm-width-min) {
              display: none;
            }
          }

          .short-description {
            line-height: 1.2em;
            @media (min-width: $sm-width-min) {
              display: block;
              margin: 15px 0 0 0;
            }
          }
        }
      }
    }
  }
}
</style>
<!-- Work theme styles only -->
<style lang='scss'>
@import '../scss/variables';

#iphone-scroll {
  position: relative;
  overflow: hidden;

  #iphone-content-wrapper {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: 50px 0;
    overflow:hidden;
    img {
      transition: all 500ms ease-in;
      position: absolute;
      z-index:-1;
      top:0;
      width: 90%;
      margin: 5%;
      padding-top:50px;
    }
  }
}


body {
  transition: background-color 750ms, color 750ms;
  transition-delay: 500ms;
}

body[data-theme="levis"] {
  background-color: #f7f7f7;
  #work-feature {
    .hero {
      position: absolute;
      top:0;
      height: 200px;
      overflow: hidden;
      left: 0;
      right: 0;
      margin: 0;
      z-index: -1;
      img {
        position: absolute;
        width: 600px;
        bottom: 0;
        left: 100px;
      }

      @media (min-width: $sm-width-min) {
        width: 100%;
        height: 400px;
        img {
          right: 0;
          left: auto;
        }
      }
    }
    h1 {
      padding-top: 150px;
    }

    .assets {
      > div {
        &:nth-of-type(n) {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        &:nth-of-type(2) {
          display: none;
        }
        @media (min-width: $sm-width-min) {
          width: 100%;

          &:nth-of-type(2) {
            width: 15%;
            display: block;
            margin-right: 10%;
            margin-left: 5%;
            margin-top: 180px;
          }
          &:nth-of-type(3) {
            width:70%;
          }
        }
      }
    }
  }
}

body[data-theme="romper"] {
  background-color: #f7f7f7;
  background-repeat: no-repeat;
  background-size: 0px 0px;
  background-position: center 500px;

  #work-feature {
    .hero {
      margin-top: -20px;

      @media (min-width: $sm-width-min) {
        margin-top:120px;
      }
    }
    .assets {
      > div {
        width: 90%;

        &:first-of-type {
          display: none;
        }

        &:nth-of-type(2) {
          margin-bottom: 30px;
        }

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            display: block;
            margin: 0;
            width: 100%;
          }

          &:nth-of-type(2) {
            width: 30%;
            margin-right: 10%;
          }

          &:last-of-type {
            width: 60%;
            margin-right: 0;
          }
        }
      }
    }
  }
}

body[data-theme="prompt_me"] {
  background-color: #C1EAE7;
  background-repeat: no-repeat;
  background-size: 100% auto;

  #work-feature {

    .hero {
      margin-top: 40px;
    }

    h1 {
      margin-top: 40px;
    }

    .assets {
      > div {
        @media (min-width: $sm-width-min) {
          &:nth-of-type(n) {
            width: 25%;
            margin-right: 12.5%;
          }
          &:nth-of-type(3) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

body[data-theme="the_sum"] {
  background-color: #86E9EE;

  #work-feature {
    overflow: hidden;
    .hero {
      overflow: hidden;
      position: absolute;
      right: 0;
      width: 100%;
      z-index:-1;
      img {
        right: -35%;
        position: relative;
      }

      @media (min-width: $sm-width-min) {
        img {
          right: -50%;
        }
      }

      @media (min-width: $md-width-min) {
        width: 50%;

        img {
          right: -20%;
        }
      }
    }
    h1 {
      padding-top:160px;
    }
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}

body[data-theme="photography"] {
  @media (min-width: $sm-width-min) {
    #work-feature .assets > div {
      width: 100%;
    }
  }
}

body[data-theme="fries"] {
  background-color: #E5D8EF;

  #work-feature {
    .hero {

      margin-top:-50px;
    }
    .assets {
      margin-top: 80px;
      > div {
        width: 100%;
        margin: 40px 0;

        &:nth-of-type(2) {
          display: none;
        }
      }
      @media (min-width: $sm-width-min) {
        div:first-of-type, div:last-of-type {
          width: 100%;
        }
        div:nth-of-type(2) {
          display: block;
          width: 15%;
          margin-left:10%;
          margin-right:3%;
          margin-top:80px;
        }
        div:nth-of-type(3) {
          width:65%;
        }
      }
    }
  }
}
body[data-theme="ogx"] {
  #work-feature {
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }

      @media (min-width: $sm-width-min) {
        margin-top: 0;
      }
    }
  }
}
body[data-theme="interactive_flowcharts"] {

  #work-feature {
    .hero {
      margin-top: 0;
    }
    @media (min-width: $sm-width-min) {
      .hero {
        margin-top: 200px;
      }
    }
    @media (min-width: $sm-width-min) {
      .hero {
        margin-top: 150px;
      }
    }
    .assets {
      > div {
        width: 90%;

        @media (min-width: $sm-width-min) {
          width:45%;
          margin-right: 10%;

          &:first-of-type {
            margin-top: 50px;
          }

          &:last-of-type {
            width: 45%;
            margin-right: 0;
            margin-top: 0;
          }
        }
      }
    }
  }
}

body[data-theme="please"] {
  #work-feature {
    .hero {
      margin-top: -60px;
      @media (min-width: $sm-width-min) {
        margin-top: 50px;
        width: 40%;
      }
    }

    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;

        &:nth-of-type(2) {
          width: 80%;
          margin-left: 10%;
        }

        @media (min-width: $sm-width-min) {
          &:nth-of-type(2) {
            width: 40%;
            margin-right:10%;
          }
          &:nth-of-type(3) {
            width: 30%;
          }
        }
        @media (min-width: $md-width-min) {
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 100px;
            margin-bottom: 100px;
          }
        }
      }
    }
  }
}
body[data-theme="bustle"] {
  background-color: #f7f7f7;

  #work-feature {
    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;

        &:nth-of-type(2) {
          width: 60%;
          margin-left:20%;
        }

        &:nth-of-type(4) {
          width: 80%;
          margin-left: 10%;
        }

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            width: 70%;
          }
          &:nth-of-type(2) {
            width:17%;
            margin-left: 7%;
            margin-right: 0;
            margin-top: 120px;
          }
          &:nth-of-type(3) {
            margin-top: 180px;
            margin-bottom: 150px;
            float: right;
            width: 40%;
          }
          &:nth-of-type(4) {
            margin-top: 150px;
            margin-bottom: 150px;
            float: left;
            width: 40%;
          }
          &:nth-of-type(5) {
            display: none;
          }
        }
      }
    }
  }
}

body[data-theme="gen_z_studio"] {
  background-color: #fbff7b;

  .header-section {

      margin-bottom: 100px;

    @media (min-width: $md-width-min) {
      width: 1000px;
      margin: 0 auto;
    }
  }

  #work-feature {
    padding-bottom: 0;

    @media (min-width: $md-width-min) {
      width: 100%;
    }

    .hero {
      width: 75%;
      margin: 50px auto;

      @media (min-width: $sm-width-min) {
        width: 50%;
        margin-top: 150px;
      }

      @media (min-width: $sm-width-min) {
        margin-top: 100px;
      }
    }

    h1 {
      padding-top: 50px;
    }

    ul, ul li {
      margin-left: 10px;
      padding-left: 0;
    }

    .assets {
      width: calc( 100% + 40px );
      margin: 0 -20px;

      @media (min-width: $sm-width-min) {
        width: calc( 100% + 160px);
        margin: 150px -80px 0;
      }

      > div {
        float: none;
        display: block;

        &:first-of-type, &:nth-of-type(2) {
          width: 100%;
          margin: 0;
          background: #fcffb8;

           &:nth-of-type(2) {
             background: #fff;
           }

          .group1, .group2 {
            padding: 50px 0;
            float: none;
            min-height: 650px;

            @media (min-width: $sm-width-min) {
              width: 90%;
              margin: 0 auto;
            }

            @media (min-width: $md-width-min) {
              width: 1000px;
              margin: 0 auto;
              min-height: 700px;
            }

            > div {
              width: 80%;
              margin: 50px auto;

              @media (min-width: $sm-width-min) {
                width: 45%;
                float: left;
                margin-bottom: 150px;
              }

              &:nth-of-type(2) {
                margin-top: 100px;

                @media (min-width: $sm-width-min) {
                  width: 50%;
                  margin: 50px 0 0 5%;

                  h2 {
                    margin: 0;
                  }
                }
              }
            }
          }
          .group2 {

            @media (min-width: $sm-width-min) {
              margin-bottom: 50px;
            }

            > div {
              @media (min-width: $sm-width-min) {
                width: 65%;
                margin-bottom: 0;
                float: left;
                margin-top: 100px;
              }
              @media (min-width: $md-width-min) {
                width: 60%;
                margin-top: 150px;
              }

              &:nth-of-type(2) {
                width: 50%;
                @media (min-width: $sm-width-min) {
                  width: 30%;
                  float: right;
                }
              }
            }
          }
        }

        &:nth-of-type(3) {
          width: 80%;
          margin: 100px 10%;

          @media (min-width: $md-width-min) {
            width: 1000px;
            margin: 100px auto;
          }

          h2 {
            font-weight: black;
            font-size: 40px;
            line-height: 1.2;
          }
        }
      }
    }
  }
  #work-list {
    margin-top: 0;
  }
}
body[data-theme="wdypb"] {
  background: #FECD30;

  #work-feature {
    .hero {
      width: 60%;
      margin: -40px auto 0;
      @media (min-width: $sm-width-min) {
        margin-top: 0;
        margin-right: 100px;
        width: 32%;
      }
    }

    .assets {
      > div {
        width: 100%;
        margin-left: 0;
        margin-right: 0;

        @media (min-width: $sm-width-min) {
          &:first-of-type {
            width: 60%;
          }
          &:nth-of-type(2) {
            width: 35%;
            margin-left: 5%;
          }
          &:nth-of-type(3) {
            float: right;
            width: 60%;
          }
          &:nth-of-type(4) {
            float: left;
            width: 35%;
            margin-top: 200px;
          }
        }
        @media (min-width: $md-width-min) {
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 100px;
          }
        }
      }
    }
  }
}
body[data-theme="leanstartup"] {
  background: #EFEFEF;

  background-repeat: no-repeat;
  background-size: 100% auto;

  #work-feature {
    margin-top: 180px;

    @media (min-width: $sm-width-min) {
      margin-top: 0;
    }

    .hero {
      margin-bottom: 50px;

      @media (min-width: $sm-width-min) {
        margin-top: 75px;
      }
    }
    .assets {
      > div:nth-of-type(n) {
        width: 90%;
        @media (min-width: $sm-width-min) {
          width: 40%;
        }
      }
      > div:first-of-type {
        margin-top: 50px;
        @media (min-width: $sm-width-min) {
          margin-top: 80px;
          width: 45%;
        }
      }
      > div:nth-of-type(2) {
        margin: 50px 5% 100px;
        @media (min-width: $sm-width-min) {
          margin: 130px 0 0;

          &:after {
            content: "";
            clear: both;
            display: block;
          }
        }
      }
      > div:nth-of-type(3) {
        @media (min-width: $sm-width-min) {
          text-align: center;
          width: 100%;
          margin-top: 150px;
          img {
            width: 60%;
          }
        }
      }
    }
  }

  #work-list {
    position: relative;

    &:before {
      z-index: -1;
      content: "";
      background-image: url('/static/img/leanstartup-bg-2.png');
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: bottom;
      height: 100%;
      position:absolute;
      top: -100%;
      left: 0;
      right: 0;
    }
  }
}
body[data-theme="arsenal"] {
  color: #fff;
  background-repeat: no-repeat;
  background-color: #b28da2;
  background-size: auto 100vh;
  background-position: 15% top;

  @media (min-width: $sm-width-min) {
    background-size: 125% auto;
    background-position: 0 -10vw;
  }
  @media (min-width: $lg-width-min) {
    background-size: 100% auto;
    background-position: 0 -25vw;
  }

  .logo:not(.black) * {
    fill: #ffffff;
  }

  .menu-button span {
    background: #fff;
    color: #fff;
  }

  .menu-button.active span {
    background: #000;
    color: #000;
  }

  header, nav, header a, nav a{
    color: #fff;

    .router-link-active {
      border-color: #fff;
    }
  }
  nav.active a {
    color: #000;

    @media (min-width: $sm-width-min) {
      color: #fff;
      transition: color 750ms;
      transition-delay: 500ms;
    }
  }

  #work-feature {
    padding-bottom: 0;

    @media (min-width: $sm-width-min) {
      width: 100%;
      padding: 0;
    }

    .header-section {
      @media (min-width: $sm-width-min) {
        width: 100%;
        margin: 0 auto;
      }
      @media (min-width: $md-width-min) {
        width: 1000px;
      }
    }

    h1 {
      color: #fff;
    }
    a {
      color: #fff;
      border-color: #fff;
    }

    .hero {
      width: 60%;
      margin: -40px auto 0;
      @media (min-width: $sm-width-min) {
        margin-top: 100px;
        margin-right: 10%;
        width: 32%;
      }
    }

    .assets {
      margin-top: 100px;

      @media (min-width: $sm-width-min) {
        width: 100%;
      }

      > div {
        width: 100%;
        margin: 40px 0;
        display: block;
        position: relative;

        @media (min-width: $sm-width-min) {
          margin: 80px auto;
          float: none;
        }
        @media (min-width: $md-width-min) {
          width: 1000px;
          margin: 80px auto;
          float: none;
        }
        &:nth-of-type(1), &:nth-of-type(2) {

          img {
              @media (min-width: $sm-width-min) {
                width: 80%;
                margin: 0 auto;
                display: block;
              }
          }
          &:nth-of-type(2) {
            z-index: 9;
          }
        }


        &:nth-of-type(3) {
          background: #916b80;
          width: calc( 100% + 40px);
          margin: -80px -20px -50px;
          padding: 150px 0 125px;
          position: relative;

          @media (min-width: $sm-width-min) {
            width: calc( 100% + 120px);
            margin: -150px -60px -50px;
          }

          img {
            width: 80%;
            margin: 0 auto;
            display: block;

            @media (min-width: $sm-width-min) {
              padding: 200px 0;
            }
          }
        }

        &:nth-of-type(4), &:nth-of-type(5) {
          background: #fff;
          width: calc(100% + 40px);
          margin: 0 -20px;

          @media (min-width: $sm-width-min) {
            background: #fff;
            width: calc( 100% + 120px);
            margin: 0 -60px;
          }

          &:nth-of-type(5) {
            background: #f5f2f5;
            @media (min-width: $sm-width-min) {
              background: #f5f2f5;
            }
          }
        }

        .group {
          background: #fff;
          width: 100%;

          padding: 50px 0;

          @media (min-width: $sm-width-min) {
            width: 1000px;
            margin: 0 auto;
          }

          > div {
            width: 80%;
            margin: 0 auto;
          }

          &.group1 {
            margin-top: 50px;


            @media (min-width: $sm-width-min) {
              display: flex;
              box-orient: vertical;
              align-items: center;
              min-height: 400px;
              padding: 150px 0;
            }

            > div {
              display: block;
              margin: 0 auto;

              &:nth-of-type(1) {
                width: 60%;
                margin-bottom: 50px;


                @media (min-width: $sm-width-min) {
                  width: 25%;
                  float: left;
                }
              }
              &:nth-of-type(2) {
                width: 80%;
                @media (min-width: $sm-width-min) {
                  width: 60%;
                  float: right;
                }
              }
            }
          }
          &.group2 {
            background: #f5f2f5;

            @media (min-width: $sm-width-min) {
              min-height: 500px;
              padding: 100px 0 150px;
              margin-bottom: -100px;
              display: flex;
              box-orient: vertical;
              align-items: center;
            }

            > div {
              margin-top: 40px;
              margin-bottom: 40px;

              @media (min-width: $sm-width-min) {
                width: 45%;
                float: left;
              }

              &:nth-of-type(2) {
                margin-top: 80px;
                @media (min-width: $sm-width-min) {
                  float: right;
                }
              }
            }
          }
        }
      }
    }
  }
  #work-list {
    @media (min-width: $md-width-min) {
      width: calc( 100% + 200px);
      margin: 100px -100px;
      padding: 0;

      ul {
        padding: 0 20%;
      }
    }
  }
}
body[data-theme="monegraph"] {
  color: #fff;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: 45% 5%;

  .logo:not(.black) * {
    fill: #ffffff;
  }

  .menu-button span {
    background: #fff;
    color: #fff;
  }

  .menu-button.active span {
    background: #000;
    color: #000;
  }

  header, nav, header a, nav a{
    color: #fff;

    .router-link-active {
      border-color: #fff;
    }
  }
  nav.active a {
    color: #000;

    @media (min-width: $sm-width-min) {
      color: #fff;
      transition: color 750ms;
      transition-delay: 500ms;
    }
  }

  #work-feature {
    h1 {
      color: #fff;
    }
    a {
      color: #fff;
      border-color: #fff;
    }
  }
}
</style>
