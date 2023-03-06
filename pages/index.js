import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import profile from "./my-profile.png";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isMobileOrTablet = () => {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
};

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (name.trim().length === 0) {
      alert("Please enter name");
      return;
    }
    if (email.trim().length === 0) {
      alert("Please enter email");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email");
      return;
    }
    if (message.trim().length === 0) {
      alert("Please enter message");
      return;
    }
    let url =
      "https://" +
      (isMobileOrTablet() ? "api" : "web") +
      ".whatsapp.com/send?phone=7011429937&text=" +
      "*Name:* " +
      name +
      " *Email:* " +
      email +
      " *Message:* " +
      message;
    window.open(url);
  };

  return (
    <div>
      <Head>
        <title>Aadil Ali</title>
        <meta name="description" content="Aadil Ali - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
          integrity="sha512-WEQNv9d3+sqyHjrqUZobDhFARZDko2wpWdfcpv44lsypsSuMO0kHGd3MQ8rrsBn/Qa39VojphdU6CMkpJUmDVw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a href="#" class="navbar-brand mx-auto mx-lg-0">
            Portfolio
          </a>
        </div>
      </nav>
      <main>
        <section class="hero d-flex justify-content-center align-items-center" id="section_1">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-12">
                <div class="hero-text">
                  <div class="hero-title-wrap d-flex align-items-center mb-4">
                    <h1 class="hero-title mb-0">Hi! I&#39;m Aadil Ali</h1>
                  </div>

                  <h2 class="mb-4">Frontend Developer</h2>
                  <p class="mb-4">
                    <a class="custom-btn btn custom-link" href="#section_2">
                      Let&#39;s begin
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-lg-5 col-12 position-relative">
                <div
                  class="hero-image-wrap"
                  style={{ backgroundImage: `url(${profile.src})` }}
                ></div>
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#535da1"
              fill-opacity="1"
              d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
        </section>

        <section class="about section-padding" id="section_2">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 text-center">
                <img src="/images/myabout.png" class="about-image img-fluid" alt="" />
              </div>

              <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                <div class="about-thumb">
                  <h3 class="pt-2 mb-3">A little bit about me</h3>
                  <p>
                    I have gained experience working on a variety of projects, including building
                    responsive websites and designing user interfaces. I have also developed strong
                    problem-solving and teamwork skills. I have one year of experience as frontend
                    developer, and i am pursuing my BCA from Manipal University Jaipur.
                  </p>
                  <p>
                    I constantly strive to learn and develop, both personally and professionally, by
                    accepting opportunities to venture outside of my comfort zone, taking on new
                    challenges, and increasing my knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-12 mx-auto">
                <div class="profile-thumb">
                  <div class="profile-title">
                    <h4 class="mb-0">Information</h4>
                  </div>

                  <div class="profile-body">
                    <p>
                      <span class="profile-small-title">Name</span>
                      <span>Aadil Ali</span>
                    </p>

                    <p>
                      <span class="profile-small-title">Email</span>
                      <span>
                        <a href="khalidist759@gmail.com">aadil1129ali@gmail.com</a>
                      </span>
                    </p>
                    <p>
                      <span class="profile-small-title">LinkedIn</span>
                      <span>
                        <a href="https://www.linkedin.com/in/aadil-ali-a66771237/">
                          aadil-ali-a66771237
                        </a>
                      </span>
                    </p>
                    <p>
                      <span class="profile-small-title">Github</span>
                      <span>
                        <a href="https://github.com/Aadil1129">https://github.com/Aadil1129</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="clients section-padding">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12 col-12">
                <h3 class="text-center mb-5">Skills</h3>
              </div>
              <div class="skill-set-wrap">
                <div class="skill-set">HTML</div>
                <div class="skill-set">CSS</div>
                <div class="skill-set">JavaScript</div>
                <div class="skill-set">React Js</div>
                <div class="skill-set">Next Js</div>
                <div class="skill-set">Redux</div>
                <div class="skill-set">Material UI</div>
                <div class="skill-set">Firebase</div>
                <div class="skill-set">Chart Js</div>
              </div>
            </div>
            <div class="row align-items-center mt-5">
              <div class="col-lg-12 col-12">
                <h3 class="text-center mb-5">Companies I&#39;ve had worked</h3>
              </div>

              <div class="col-6">
                <img src="/images/vhub.jpg" class="clients-image img-fluid" alt="" />
              </div>

              <div class="col-6">
                <img src="/images/gAngles.jpeg" class="clients-image img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section class="projects section-padding" id="section_4">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-12 ms-auto">
                <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="/images/white-desk-work-study-aesthetics.jpg"
                    class="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 class="text-white ms-4 mb-0">Projects</h2>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="projects-thumb">
                  <div class="projects-info">
                    <small class="projects-tag">Online Examination</small>

                    <h3 class="projects-title">Exam Sheet</h3>
                  </div>

                  <a href="https://exam-sheet.vercel.app/" target="_blank" class="popup-image">
                    <img src="/images/examsheet.png" class="projects-image img-fluid" alt="" />
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="projects-thumb">
                  <div class="projects-info">
                    <small class="projects-tag">Boomrang</small>

                    <h3 class="projects-title">Boomrang</h3>
                  </div>

                  <a href="https://boomrang-model.vercel.app/" target="_blank" class="popup-image">
                    <img src="/images/boomrang.png" class="projects-image img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="projects-thumb">
                  <div class="projects-info">
                    <small class="projects-tag">Bar Graph</small>

                    <h3 class="projects-title">Bar Graph</h3>
                  </div>

                  <a href="https://react-bar-graph.vercel.app/" target="_blank" class="popup-image">
                    <img src="/images/bargraph.png" class="projects-image img-fluid" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact section-padding" id="section_5">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3 class="text-center mb-5">Contact</h3>
              </div>

              <div class="col-md-6 col-12 ps-lg-0">
                <div class="contact-info d-flex flex-column">
                  <strong class="site-footer-title d-block mb-3">Email</strong>
                  <p>
                    <a href="mailto:aadil1129ali@gmail.com">aadil1129ali@gmail.com</a>
                  </p>

                  <strong class="site-footer-title d-block mt-3 mb-3">LinkedIn</strong>
                  <p class="mb-0">
                    <a href="https://www.linkedin.com/in/aadil-ali-a66771237/">
                      aadil-ali-a66771237
                    </a>
                  </p>

                  <strong class="site-footer-title d-block mt-3 mb-3">Github</strong>
                  <p class="mb-0">
                    <a href="https://github.com/Aadil1129">https://github.com/Aadil1129</a>
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                <div class="custom-form contact-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />

                        <label for="floatingInput">Name</label>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-floating">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <label for="floatingInput">Email address</label>
                      </div>
                    </div>

                    <div class="col-lg-12 col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          value={message}
                          id="message"
                          name="message"
                          placeholder="Type your message"
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <label for="floatingTextarea">Type your message</label>
                      </div>
                    </div>

                    <div class="col-lg-3 col-12 ms-auto">
                      <button onClick={submit} class="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
