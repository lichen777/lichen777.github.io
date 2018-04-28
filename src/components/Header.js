import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return <header id="header">
            <div className="inner">
              <a href="#" className="image avatar">
                <img src={avatar} alt="ava" />
              </a>
              <h1>
                <strong>I am Chen Li</strong>
                <br />
                Full-Stack Engineer | Lifetime Learner| Problem Solver | Innovator<br />
                React/Redux, NodeJS, Python/Django, Java, Blockchain
              </h1>
            </div>
            <Footer />
          </header>
    }
}

export default Header
