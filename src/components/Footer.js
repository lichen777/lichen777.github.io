import React from 'react'

class Footer extends React.Component {
    render() {
        return <div id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="https://www.linkedin.com/in/chenli777/" className="icon fa-linkedin">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lichen777" className="icon fa-github">
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:lchen139@gmail.com" className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>
                  Design: <a href="https://www.gatsbyjs.org/" target="_blank">
                    Gatsby
                  </a> & <a href="http://html5up.net" target="_blank">
                    HTML5 UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
    }
}

export default Footer
