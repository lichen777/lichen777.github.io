import React from 'react'

import Footer from './Footer'
const avatar = 'https://avatars0.githubusercontent.com/u/9433422?s=460&v=4'

class Header extends React.Component {
  render() {
    return <header id="header">
        <div className="inner">
          <a href="https://github.com/lichen777" target="_blank" className="image avatar">
            <img src={avatar} alt="ava" />
          </a>
          <h1>
            <strong>Chen Li</strong>
          </h1>
          <h4>
              Full-Stack Engineer
              <p>JavaScript, React, Node.js, Python, Blockchain</p>
          </h4>
        </div>
        <Footer />
      </header>
  }
}

export default Header
