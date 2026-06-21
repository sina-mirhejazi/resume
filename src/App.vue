<!-- eslint-disable -->
<template>
  <div id="app">
    <div class="container">
      <section class="hero">
        <div class="intro">
          <h1>Sina Mirhejazi</h1>
          <h2 class="accent-font">Senior Software Engineer</h2>
        </div>
        <div class="contacts">
          <div class="contacts__item">
            <font-awesome-icon :icon="['fas', 'phone']" />
            (+46) 723-5588-08
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <a href="mailto:sina.mirhejazi@gmail.com" target="_blank">sina.mirhejazi@gmail.com</a>
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            <a href="https://www.linkedin.com/in/sinamirhejazi/" target="_blank">sinamirhejazi</a>
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fas', 'globe-asia']" />
            Uppsala, Sweden
          </div>
        </div>
      </section>
      <section class="body">
        <main>
          <section>
            <h3>Profile</h3>
            <p>
              Experienced Senior Software Engineer with more than 11 years of experience equipped
              with a diverse and promising skill-set. Proficient in various frameworks and
              languages. Experienced with the latest cutting edge development tools and procedures.
              Able to effectively self-manage during independent projects, as well as collaborate as
              part of a productive team. Having a good background in C++ programming through ACM &
              Soccer Simulation RoboCup helps me a lot with problem-solving and working on a team.
            </p>
          </section>

          <section>
            <h3>Skills</h3>
            <div style="display: flex; justify-content: space-between">
              <ul>
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React, ReactNative</li>
                <li>ExpressJS</li>
                <li>NodeJS/V8</li>
                <li>Angular 2+</li>
                <li>VueJS</li>
                <li>REST API</li>
                <li>Docker</li>
                <li>Firebase</li>
                <li>Unit and Integration Testing</li>
                <li>Git</li>
                <li>Kafka</li>
              </ul>
              <ul>
                <li>Datadog, Sentry, Splunk and ChoasSearch</li>
                <li>ESLint, TSLint</li>
                <li>CSS Preprocessors (SASS), BEM</li>
                <li>Agile & Scrum</li>
                <li>Object Oriented Programming</li>
                <li>Functional Programming</li>
                <li>Code Review</li>
                <li>AWS S3, RDS</li>
                <li>GraphQL</li>
                <li>Test Driven Development</li>
                <li>Reactive Programming</li>
                <li>Team Leadership and Mentoring</li>
              </ul>
              <ul>
                <li>PostgreSQL, Prisma ORM</li>
                <li>ElectronJS</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>NgRx</li>
                <li>Nuxt.js</li>
                <li>Gitlab CI/CD</li>
                <li>Kubernetes</li>
                <li>Server Side Rendering</li>
                <li>C/C++</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Work Experiences</h3>
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/klarna-logo.jpg" />
                <h4>Senior Software Engineer</h4>
                <div>
                  <font-awesome-icon :icon="['fas', 'calendar-days']" />
                  <span class="accent-font">Jun 2021 - Present</span>
                </div>
                <h5>
                  <a href="https://www.klarna.com/">Klarna Bank AB</a>
                </h5>
                <div>Stockholm, Sweden</div>
              </div>
              <div class="work-experience__body">
                <ul>
                  <li>Handling <strong>cross-team communication</strong> and initiating and managing
                    a project involving multiple teams.</li>
                  <li>
                    Main driver in a new product, participating in designing the project, database
                    and dataflow between different parts, using <strong>Kafka</strong>,
                    <strong>PostgreSQL</strong>, <strong>GraphQL</strong> and
                    <strong>ExpressJS</strong> on the backend and <strong>ReactNative</strong> on
                    the frontend.
                  </li>
                  <li>
                    Implementing and <strong>deploying</strong> the backend services and setting up
                    <strong>monitoring</strong> and <strong>dashboards</strong>.
                  </li>
                  <li>
                    Writing a <strong>complex native query</strong> to read and aggregate data from
                    the database which responds more than <strong>300K per hour</strong> averaging
                    in <strong>less than 20ms</strong> for each request.
                  </li>
                  <li>
                    Participating in <strong>on-call rotations</strong> and
                    <strong>handling incidents</strong>.
                  </li>
                  <li>
                    Conducting <strong>interviews</strong> and <strong>code reviews</strong> as part
                    of the recruitment process.
                  </li>
                  <li>
                    <strong>Mentoring new joiners</strong> and helping them to get onboard on the
                    team's way of working and technical stacks.
                  </li>
                  <li>Refactoring legacy codes.</li>
                  <li>
                    Figuring out issues and improving the pipeline and tools used by 1000+
                    developers across the whole company.
                  </li>
                </ul>
              </div>
            </section>
            <!-- Klarna -->
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/thisthat-logo.png" />
                <h4>Senior Front-End Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fas', 'calendar-days']" />
                  <span class="accent-font">May 2020 - Apr 2021</span>
                </div>
                <h5>
                  <a href="https://www.thisthatapp.com">ThisThat</a>
                  <small>Surveying Platform</small>
                </h5>
                <div>Berlin, Germany <small>(Remote)</small></div>
              </div>
              <div class="work-experience__body">
                <ul>
                  <li>
                    Developing an analytic platform for surveys.
                    <ul>
                      <li>
                        Upgrading the project to <strong>Angular 9</strong> and
                        <strong>Firebase</strong>.
                      </li>
                      <li>
                        Refactoring the project into a clean and scalable project step-by-step while
                        adding new features.
                      </li>
                      <li>
                        Optimizing <strong>CI/CD</strong> using <strong>Docker</strong> on
                        <strong>Gitlab CI</strong>.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <!-- ThisThat -->
            <section class="work-experience" style="padding-top: 3rem">
              <div class="work-experience__header">
                <img src="./assets/cafebazaar-logo.png" />
                <h4>Software Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fas', 'calendar-days']" />
                  <span class="accent-font">Apr 2018 - March 2020</span>
                </div>
                <h5>
                  <a href="https://cafebazaar.ir">Cafebazaar</a>
                  <small>Iranian Android Marketplace</small>
                </h5>
                <div>Tehran, Iran</div>
              </div>
              <div class="work-experience__body">
                <ul>
                  <li>
                    Developing a cloud panel
                    <ul>
                      <li>
                        Developing a clean and scalable platform using
                        <strong>VueJS</strong> with the help of <strong>Vuex</strong>,
                        <strong>Vue-Router</strong>, <strong>SCSS</strong>, <strong>BEM</strong>,
                        and <strong>ESLint</strong>.
                      </li>
                      <li>
                        Communicating with different APIs such as
                        <strong>Kubernetes</strong>, <strong>AWS-S3</strong>, and
                        <strong>Ceph</strong>.
                      </li>
                      <li>
                        Developing <strong>CI/CD</strong> using <strong>Docker</strong> and
                        <strong>Gitlab CI</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Creating a documentation website for internal teams to easily add their API docs
                    using <strong>NuxtJS</strong>
                  </li>
                  <li>
                    Creating a CLI tool to check and compare i18n files to find the missing or
                    unused tokens in the project using <strong>NodeJS</strong>.
                  </li>
                  <li>Participating in code review process.</li>
                </ul>
              </div>
            </section>
            <!-- Cafebazaar -->
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/faranesh-logo.png" />
                <h4>Software Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fas', 'calendar-days']" />
                  <span class="accent-font">Feb 2015 - Apr 2018</span>
                </div>
                <h5>
                  <a href="https://faranesh.com">Faranesh</a>
                  <small>Online Video Learning Marketplace</small>
                </h5>
                <div>Tehran, Iran</div>
              </div>
              <div class="work-experience__body">
                <ul>
                  <li>
                    Faranesh Website
                    <ul>
                      <li>
                        Create a feature-rich video learning website from scratch using cutting edge
                        technologies including
                        <strong>Angular4</strong> (with great help from <strong>RxJS</strong>)
                      </li>
                      <li>
                        Come up with an architecture that separated concerns on multiple levels,
                        including:
                        <ul>
                          <li>
                            the data layer and Redux’s state management (<strong>NgRx</strong>)
                          </li>
                          <li>Async services and data provider services</li>
                        </ul>
                      </li>
                      <li>
                        This architecture's high level of detachment and reusability was a great
                        help to us in recruiting and adding new employees with different levels of
                        skill.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Faranesh B2B Panel
                    <ul>
                      <li>
                        Designed for other companies and made them able to create a team and assign
                        different courses to their employees and track their progress.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Faranesh Hybrid Mobile
                    <ul>
                      <li>
                        Developing a hybrid mobile app using
                        <strong>ReactNative</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Faranesh Desktop App
                    <ul>
                      <li>
                        Developing a desktop application using
                        <strong>React</strong> and <strong>Electron</strong>.
                      </li>
                      <li>
                        Developing a file encoder/decoder using
                        <strong>NodeJS</strong> and <strong>C++/V8</strong> to encode videos on
                        servers and then decode the videos and show them to users on the
                        application.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <!-- Faranesh -->
          </section>

          <section>
            <h3>Hubbies</h3>
            <p>
              Playing badminton, hiking, and camping in the woods and video games.<br />
              Watching TV shows, any kind of documentaries, and Youtube videos about woodworking and
              fantasizing that someday I'll have my own workshop.
            </p>
          </section>
          <section>
            <h3>Languages</h3>
            <ul>
              <li><strong>English</strong> - Proficient (C1)</li>
              <li><strong>Swedish</strong> - A1</li>
              <li><strong>Persian</strong> - Native</li>
            </ul>
          </section>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line quotes
  name: "App",
};
</script>

<style lang="scss">
$backgroundColor: #faf3e3;
$mainColor: #1b1811;
$accentColor: #05765d;

html,
body {
  background-color: $backgroundColor;
}

@page {
  background-color: $backgroundColor;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainColor;

  background-color: $backgroundColor;

  line-height: 1.8rem;
}

.accent {
  &-font {
    color: $accentColor;
  }
}

.container {
  width: 1140px;

  margin: 0 auto;

  padding: 50px;

  box-sizing: border-box;

  padding-bottom: 1000px;
}

a {
  color: inherit;

  text-decoration: none;
}

.hero {
  display: flex;
  flex-direction: column;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
  }

  h1,
  h2 {
    margin: 0;

    text-transform: uppercase;
  }

  h1 {
    font-size: 4rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2rem;
  }

  .contacts {
    grid-column: 1 / span 2;

    display: flex;
    justify-content: stretch;
    align-items: center;

    &__item {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 15px;

      border-left: 1px solid $accentColor;

      svg {
        margin-right: 7px;
      }

      &:first-child {
        border-left: none;
      }
    }
  }
}

.body {
  display: flex;
  margin-top: 30px;
}

main {
  section {
    h3 {
      font-size: 1.5rem;

      border-bottom: 1px solid $accentColor;

      margin-bottom: 1rem;
    }
  }
}

// aside {
//   padding: 15px;
//   color: white;

//   font-size: 0.8rem;

//   background-color: $accentColor;

//   hr {
//     border: none;
//     border-bottom: 1px solid rgba(white, 0.5);
//     margin: 15px 20px;
//   }

//   h3 {
//     padding-bottom: 5px;

//     font-size: 1rem;

//     border-bottom: 1px solid white;
//     text-transform: uppercase;
//   }

//   h4 {
//     margin-bottom: 0;
//   }

//   ul {
//     padding-left: 1rem;
//     margin: 0;
//   }

//   h4 + small {
//     display: block;
//     margin-top: -0.5rem;
//   }
// }

.work-experience {
  margin-bottom: 50px;

  &__header {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 50px 1fr 1fr;
    grid-gap: 5px 15px;

    img {
      width: 50px;
      height: 50px;

      align-self: center;

      grid-row: 1 / span 2;

      object-fit: contain;
    }

    svg {
      margin-right: 5px;
    }

    div {
      text-align: right;

      font-size: 0.8rem;
    }

    h4,
    h5 {
      margin: 0;

      small {
        margin-left: 5px;
      }
    }
  }
}
</style>
