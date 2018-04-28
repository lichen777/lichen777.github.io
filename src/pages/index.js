import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      moreIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  handleClick() {
    if (!this.state.moreIsOpen) {
        this.setState({ moreIsOpen: true })
    }
  }

  render() {
    return <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Chen Li - My Page</title>
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <p>
              Full Stack Engineer | Lifetime Learner | Problem Solver |
              Innovator
            </p>
            <p>
              Full Stack Development Engineer with an MSEE background and
              five years of industry experience managing product lines who
              is detailed orientated and able to learn quickly. Strengths in
              product roadmap development and introductions, competitive
              analysis, customer application support, customer trainings and
              distributions channels. Enjoys working with the most advanced
              technologies in the software development industry and whose
              desire in being a Product Manager for software or web
              application.
            </p>
            <p>Tech Stack: </p>
            {this.state.moreIsOpen ? <div>
                <p>
                  Client End: React, Redux, Bootstrap, JQuery, CSS, HTML
                </p>
                <p>
                  Server End: NodeJS, Express, Python, Django, Java, Spring
                </p>
                <p>Database: MySQL, PostgreSQL, MongoDB, Redis</p>
              </div> : ''}
            {this.state.moreIsOpen ? '' : <ul className="actions">
                <li>
                  <button onClick={this.handleClick} className="button">
                    Learn More
                  </button>
                </li>
              </ul>}
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )} />

            <ul className="actions">
              <li>
                <Link to="/portfolio" className="button">
                  Full Portfolio
                </Link>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Send me a message, an email or a linkedIn InMail, I will get
              back to you as soon as possible.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="12u">
                      <textarea name="message" id="message" placeholder="Message" rows="4" />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Austin, TX <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:lchen139@gmail.com" target="_blank">
                      lchen139@gmail.com
                    </a>
                  </li>
                  <li>
                    <h3 className="icon fa-linkedin">
                      <span className="label">LinkedIn</span>
                    </h3>
                    <a href="https://www.linkedin.com/in/chenli777/" target="_blank">
                      {'LinkedIn Profile'}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
  }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`