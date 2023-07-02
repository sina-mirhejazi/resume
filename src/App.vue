<template>
  <div id="app">
    <div class="container">
      <section class="hero">
        <img src="./assets/profile-picture-2.jpg">
        <div class="intro">
          <h1>Sina Mirhejazi</h1>
          <h2 class="accent-font">
            Senior Software Engineer
          </h2>
        </div>
        <div class="contacts">
          <div class="contacts__item">
            <font-awesome-icon :icon="['fa', 'phone']" />
            (+98) 935-3300-878
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fa', 'envelope']" />
            <a
              href="mailto:sina.mirhejazi@gmail.com"
              target="_blank"
            >sina.mirhejazi@gmail.com</a>
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            <a
              href="https://www.linkedin.com/in/sinamirhejazi/"
              target="_blank"
            >sinamirhejazi</a>
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fa', 'globe-asia']" />
            Tehran, Iran
          </div>

          <div class="contacts__item">
            <font-awesome-icon :icon="['fa', 'baby']" />
            1993
          </div>
        </div>
      </section>
      <section class="body">
        <main>
          <section>
            <h3>Profile</h3>
            <p>
              Experienced Senior Software Engineer with 7 years of experience equipped with a
              diverse and promising skill-set. Proficient in various frameworks and languages.
              Experienced with the latest cutting edge development tools and procedures. Able to
              effectively self-manage during independent projects, as well as collaborate as part
              of a productive team. Having a good background in C++ programming through ACM &
              Soccer Simulation RoboCup helps me a lot with problem-solving and working on a team.
            </p>
          </section>

          <section>
            <h3>Work Experiences</h3>
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/klarna-logo.jpg">
                <h4>Software Engineer</h4>
                <div>
                  <font-awesome-icon :icon="['fa', 'calendar-alt']" />
                  <span class="accent-font">Jun 2021 - Present</span>
                </div>
                <h5>
                  <a href="https://www.klarna.com/">Klarna Bank AB</a>
                  <small>Fintech company</small>
                </h5>
                <div>Stockholm, Sweden</div>
              </div>
              <div class="work-experience__body">
                <ul>
                  <li>
                    Helping the team through transition from the old my klarna page to the new one.
                    <ul>
                      <li>Refactoring legacy codes.</li>
                      <li>
                        Applying a robust architecture to make it easy for other teams to add their
                        feature to the page.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Improvement to the pipeline and tools used by 1000+ developers across the whole
                    company.
                    <ul>
                      <li>
                        Figuring out and fixig a bug in the testing procedures.
                      </li>
                      <li>
                        Adding a new test in the pipeline to help keeping the dependencies clean.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <!-- Klarna -->
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/thisthat-logo.png">
                <h4>Senior Front-End Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fa', 'calendar-alt']" />
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
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/cafebazaar-logo.png">
                <h4>Software Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fa', 'calendar-alt']" />
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
                        Making <strong>CI/CD</strong> using <strong>Docker</strong> and
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
                    unused tokens in the project using
                    <strong>NodeJS</strong>.
                  </li>
                  <li>Participating in code review process.</li>
                </ul>
              </div>
            </section>
            <!-- Cafebazaar -->
            <section
              class="work-experience"
              style="margin-top: 300px; padding-top: 30px"
            >
              <div class="work-experience__header">
                <img src="./assets/faranesh-logo.png">
                <h4>Software Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fa', 'calendar-alt']" />
                  <span class="accent-font">Oct 2016 - Apr 2018</span>
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
                          <li>Components and views</li>
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
            <section class="work-experience">
              <div class="work-experience__header">
                <img src="./assets/khallagh-logo.png">
                <h4>Front-End Developer</h4>
                <div>
                  <font-awesome-icon :icon="['fa', 'calendar-alt']" />
                  <span class="accent-font">Feb 2015 - Oct 2016</span>
                </div>
                <h5>
                  <a href="https://khallagh.com">Khallagh Borhan</a>
                  <small>Local CDN provider</small>
                </h5>
                <div>Tehran, Iran</div>
              </div>

              <div class="work-experience__body">
                <ul>
                  <li>
                    Starting several projects from scratch including
                    <ul>
                      <li>
                        Qmery - Video streaming service: Developed a back-office panel capable of
                        uploading videos, choosing a logo, thumbnail, and watermark and placing them
                        on the video, and sending the desired data to the backend to render the
                        final video.
                      </li>
                      <li>
                        VidAd - Video advertising platform: Developed a back-office panel capable of
                        selecting different categories of videos, uploading banner images, and
                        choosing a payment plan for advertisement.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Helping less experienced developers to get in touch with
                    <strong>Web Development</strong> and <strong>AngularJS</strong>.
                  </li>
                </ul>
              </div>
            </section>
            <!-- Khallagh -->
          </section>

          <section>
            <h3>Hubbies</h3>
            <p>
              Playing badminton, hiking, and camping in the woods and video games.<br>
              Watching TV shows, any kind of documentaries, and Youtube videos about woodworking and
              fantasizing that someday I'll have my own workshop.
            </p>
          </section>
        </main>
        <aside>
          <section>
            <h3>Languages</h3>
            <ul>
              <li><strong>English</strong> - Proficient (C1)</li>
              <li><strong>Swedish</strong> - A1</li>
              <li><strong>Persian</strong> - Native</li>
            </ul>
          </section>

          <section>
            <h3>Skills</h3>
            <h4>Advanced</h4>
            <ul>
              <li><strong>HTML, CSS, JavaScript, TypeScript</strong> - HTML5, CSS3, ES6</li>
              <li><strong>React, ReactNative</strong> - Redux, React Router, PropTypes, etc</li>
              <li><strong>Angular 2+</strong> - RxJS, NgRx</li>
              <li><strong>VueJS</strong> - Vue-router, Vuex</li>
              <li>
                <strong>REST API</strong> - with tools like axios, fetch, XHR, Angular’s httpClient
              </li>
              <li>
                <strong>Firebase</strong> - auth, real-time database, storage, cloud functions
              </li>
              <li><strong>Unit Testing</strong> - Jest</li>
              <li>
                <strong>Other Tools and Concepts</strong>
                <ul>
                  <li>Git</li>
                  <li>ESLint, TSLint</li>
                  <li>CSS Preprocessors (SASS), BEM</li>
                  <li>Agile & Scrum</li>
                  <li>Object Oriented Programming</li>
                  <li>Functional Programming</li>
                  <li>Code Review</li>
                </ul>
              </li>
            </ul>

            <hr>
            <h4>Intermediate</h4>
            <small>Still learning or practiced a while ago</small>
            <ul>
              <li>
                <strong>GraphQL</strong>
              </li>
              <li>
                <strong>ElectronJS</strong>
              </li>
              <li>
                <strong>Test Driven Development</strong>
              </li>
              <li>
                <strong>JQuery</strong>
              </li>
              <li>
                <strong>Bootstrap</strong>
              </li>
              <li>
                <strong>NgRx</strong>
              </li>
              <li>
                <strong>Reactive Programming</strong>
              </li>
              <li>
                <strong>Team Leadership and Mentoring</strong>
              </li>
              <li>
                <strong>Docker</strong>
              </li>
              <li>
                <strong>C/C++</strong>
              </li>
              <li>
                <strong>NodeJS/V8</strong>
              </li>
              <li>
                <strong>ExpressJS + PostgreSQL</strong>
              </li>
            </ul>

            <h4 style="margin-top: 300px; padding-top: 30px">
              Familiar with
            </h4>
            <ul>
              <li>Nuxt.js</li>
              <li>Gitlab CI/CD</li>
              <li>Kubernetes</li>
              <li>AWS S3</li>
              <li>Server Side Rendering</li>
            </ul>
          </section>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: 130px 50px;
  grid-gap: 15px;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  img {
    width: 130px;
    height: 130px;

    border-radius: 15px;
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
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}

main {
  section {
    h3 {
      font-size: 1.5rem;

      border-bottom: 1px solid $accentColor;
    }
  }
}

aside {
  padding: 15px;
  color: white;

  font-size: 0.8rem;

  background-color: $accentColor;

  hr {
    border: none;
    border-bottom: 1px solid rgba(white, 0.5);
    margin: 15px 20px;
  }

  h3 {
    padding-bottom: 5px;

    font-size: 1rem;

    border-bottom: 1px solid white;
    text-transform: uppercase;
  }

  h4 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 1rem;
    margin: 0;
  }

  h4 + small {
    display: block;
    margin-top: -0.5rem;
  }
}

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
