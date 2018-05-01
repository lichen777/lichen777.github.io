import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.png'
import full02 from '../assets/images/fulls/02.png'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Scotch Scraper',
    description:
      'Scotch-io Web Crawler Application using MongoDB, Express, React and Node.js.',
  },
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'EtherFund',
    description:
      'Blockchain based crowdfunding platform with Ethereum blockchain smart contract.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'E-Store Command Line Management System',
    description:
      'command line content management system for E-Commerce Business with MySQL and NodeJS.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Construction MGMT',
    description:
      'construction field management system that improves quality control, accelerates project delivery, safety and profitability for construction projects of all sizes.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Click Game',
    description: 'Click Memory Game using React',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'RPS Game',
    description:
      'Multiplayer online RPS game with real-time chatting using Firebase, Bootstrap and JQuery.',
  },
]

class Portfolio extends React.Component {
  constructor() {
    super()
  }

  render() {

    return <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Chen Li - My Portfolio</title>
        </Helmet>

        <div id="main">
          <section id="portfolio">
            <h2>Portfolio</h2>

            <Gallery images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )} />
            </section>
          <ul className="actions">
            <li>
              <Link to="/" className="button">
                Back
              </Link>
            </li>
          </ul>
        </div>
      </div>
  }
}

export default Portfolio