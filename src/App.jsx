import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
      {/* MENU */}
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <i className="uil uil-user" /> Marvel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <span data-hover="About">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#project" className="nav-link">
                  <span data-hover="Projects">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  <span data-hover="Resume">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <span data-hover="Contact">Contact</span>
                </a>
              </li>
            </ul>
            {/* <ul className="navbar-nav ml-lg-auto">
              <div className="ml-lg-4">
                <div className="color-mode d-lg-flex justify-content-center align-items-center">
                  <i className="color-mode-icon" />
                  Color mode
                </div>
              </div>
            </ul> */}
          </div>
        </div>
      </nav>
      {/* ABOUT */}
      <section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="small-text">
                  Welcome to{" "}
                  <span className="mobile-block">my portfolio website!</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">Hello guys, I'm</span>
                  <div className="animated-info" >
                    <span className="animated-item">Alicia Jane Medina</span>
                    <span className="animated-item">a Cartoonist</span>
                    <span className="animated-item">a Graphic Designer</span>
                  </div>
                </h1>
                <p>
                  Bringing stories to life through visual storytelling.
                  I'm crafting quirky characters or designing eye-catching
                  graphics, I love using my skills to create something unique and
                  memorable. Let's collaborate and make something amazing together!"
                </p>
                <div className="custom-btn-group mt-4">
                  <a href="#" className="btn mr-lg-2 custom-btn">
                    <i className="uil uil-file-alt" /> Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="btn custom-btn custom-btn-bg custom-btn-link"
                  >
                    Commission
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img
                  src="images/undraw/PORTFOLIO.png"
                  className="img-fluid"
                  alt="svg image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Things I have illustrated for my clients </h2>
              </div>
                <ul className="list-of-images">
                  <li className="item1">  
                    <div className="project-info">
                      <img
                        src="images/project/project-image01.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                  <li className="item2">
                    <div className="project-info">
                      <img
                        src="images/project/project-image02.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                  <li className='item3'>
                    <div className="project-info">
                      <img
                        src="images/project/project-image03.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                  <li className='item4'>
                    <div className="project-info">
                      <img
                        src="images/project/project-image04.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                  <li className='item5'>
                    <div className="project-info1">
                      <img
                        src="images/project/project-image05.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                  <li className='item6'>
                    <div className="project-info2">
                      <img
                        src="images/project/project-image06.png"
                        className="img-fluid"
                        alt="project image"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* FEATURES */}
      <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Education</h2>
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2016</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Laverdad Christian Colleges Inc.</span>
                      <small>2022 - Present</small>
                    </h3>
                    <p>
                       A consistent honor student and a valedictorian graduate.
                       Competed to a Math Quiz Bee Division Level, won 4th place
                       and Buwan ng Wika Essay Division Level, won 2nd place. 
                    </p>

                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2020</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>AMA Computer Colleges Dagupan</span>
                      <small>2020 - 2022</small>
                    </h3>
                    <p>
                      A consistent honor from ICT - Programming strand and graduated Salutatorian.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2016</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Mangaldan National Higschool</span>
                      <small>2016 - 2020</small>
                    </h3>
                    <p>
                      A consistent honor and graduated from Special 
                      Program in Mathematics Class. Competed to various 
                      mathematics competion and an active member of Mathematics Club.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2014</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>
                        Guesang Elementary School <small>2009 - 2016</small>
                      </span>
                    </h3>
                    <p>
                       A consistent honor student and a valedictorian graduate.
                       Competed to a Math Quiz Bee Division Level, won 4th place
                       and Buwan ng Wika Essay Division Level, won 2nd place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2017</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Mobile Web</span>
                      <small>Master Design</small>
                    </h3>
                    <p>
                      Please tell your friends about Tooplate website. That would be
                      very helpful. We need your support.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2015</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>User Interfaces</span>
                      <small>Creative Agency</small>
                    </h3>
                    <p>
                      <a rel="nofollow" href="https://www.facebook.com/tooplate">
                        Tooplate
                      </a>{" "}
                      is a great website to download HTML templates without any
                      login or email.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2013</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Artwork Design</span>
                      <small>New Art School</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business or
                      personal sites. You cannot redistribute this template without
                      a permission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT */}

      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="google-map w-100">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=120.75764715671541%2C14.958441554625663%2C120.76015770435335%2C14.960211417384667&amp;layer=mapnik"
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Alicia Jane Medina</h3>
                  <p className="footer-text mb-0">0991-674-3738</p>
                  <p>
                    <a href="aliciajanemedina881@gmail.com">hello@company.co</a>
                  </p>
                </div>
                <ul className="social-links">
                  <li>
                    <a
                      href="#"
                      className="uil uil-dribbble"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Dribbble"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="uil uil-instagram"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="uil uil-youtube"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Youtube"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">Interested to work together? Let's talk</h2>
                <form action="" method="get">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="ml-lg-auto col-lg-5 col-12">
                      <input
                        type="submit"
                        className="form-control submit-btn"
                        defaultValue="Send Button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}

      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <p className="copyright-text text-center">
                Copyright © 2019 Company Name . All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>       
      <script src="js/bootstrap.min.js"></script>
      <script src="js/Headroom.js"></script>
      <script src="js/jQuery.headroom.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/smoothscroll.js"></script>
      <script src="js/custom.js"></script>

    </>


  )
}

export default App
