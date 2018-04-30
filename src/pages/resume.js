import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Document, Page } from 'react-pdf'
import './style.css'

class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages })
  }

  nextPage = () => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({ pageNumber: this.state.pageNumber + 1 })
    }
    console.log(this.state.pageNumber)
  }

  previousPage = () => {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 })
    }
    console.log(this.state.pageNumber)
  }

  render() {
    const { pageNumber, numPages } = this.state

    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chen Li - My Resume</title>
        </Helmet>

        <div id="main">
          <section id="block">
            <h2>Resume</h2>
            {window.innerWidth > 420 ? <div>
                <div id="resume">
                  <Document file="http://res.cloudinary.com/lchen139/image/upload/v1525005923/Chen_Li_-_20180423.pdf" onLoadSuccess={this.onDocumentLoad}>
                    <Page pageNumber={pageNumber} />
                  </Document>
                </div>
                <p>
                  <a onClick={this.previousPage}>{' <  '}</a>
                  Page {pageNumber} of {numPages}
                  <a onClick={this.nextPage}>{'  > '}</a>
                </p>
              </div> : ''}
            <p>
              <a href="http://res.cloudinary.com/lchen139/image/upload/v1525005923/Chen_Li_-_20180423.pdf" target="_blank">
                PDF Link
              </a>
            </p>
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

export default Resume