import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const {showMenu} = this.state

    return (
      <div className="component__header">
        <div className="container" style={{position: 'relative'}}>
          <div className="wrapper">
            <div className="branding">
              <a href="/">
                <img className="logo" src="/assets/ubacm.png" />
              </a>
            </div>
            <div className="navigation">
              <ul className="links hide_mobile">
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
              <ul className="links hide_mobile">
                <li>
                  <a href="/about">What is UB ACM?</a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="/schedule">Event Schedule</a>
                </li>
              </ul>
              <ul className="links hide_mobile">
                <li>
                  <a href="/join">Stay Updated</a>
                </li>
              </ul>
              <div className="menu_toggle" onClick={this.toggleMenu}>
                <i className="fas fa-2x fa-bars" />
              </div>
            </div>
          </div>
          <div
            className={`expansion animated fadeIn${
              showMenu ? ' show_expansion' : ''
            }`}
          >
            <div className="menu">
              <ul className="links hide_mobile">
                <li className="links_width">What is UB ACM?</li>
                <li>
                  <a className="title" href="https://apps.ubacm.org">
                    Chapter Apps
                  </a>
                </li>
                <li className="indent">
                  <a href="https://apps.ubacm.org/resumes">Resume Book</a>
                </li>
                <br />
                <li>
                  <a className="title" href="/checkins">
                    How to Check In
                  </a>
                </li>
                <li>
                  <a className="title" href="/team">
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a className="title" href="/constitution">
                    Constitution
                  </a>
                </li>
              </ul>
              <ul className="links">
                <li className="links_width">Event Schedule</li>
                <li>
                  <a className="title" href="/hack">
                    Hack Nights{' '}
                    <img
                      className="img_icon"
                      src="/assets/hacknights/logo.png"
                    />
                  </a>
                </li>
                <li className="indent">
                  <a href="/hack#prizes">Prizes</a>
                </li>
                <li className="indent">
                  <a href="/hack#resumes">Resumes</a>
                </li>
                <br />
                <li>
                  <a className="title" href="/space">
                    Hackspace{' '}
                    <img
                      className="img_icon"
                      src="/assets/hackspace/logo.png"
                    />
                  </a>
                </li>
              </ul>
              <ul className="links hide_mobile">
                <li className="links_width">Stay Updated</li>
                <li>
                  <a className="title" href="/conduct">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    className="title"
                    href="https://ubacm.slack.com/signup"
                    target="_blank"
                  >
                    Slack <i className="fas fa-external-link-alt" />
                  </a>
                </li>
                <li>
                  <a
                    className="title"
                    href="https://github.com/ubacm"
                    target="_blank"
                  >
                    GitHub <i className="fas fa-external-link-alt" />
                  </a>
                </li>
                <li>
                  <a
                    className="title"
                    href="https://www.facebook.com/ubacm.org"
                    target="_blank"
                  >
                    Facebook <i className="fas fa-external-link-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mobile_nav${showMenu ? ' show_nav' : ''}`}>
          <div className="menu_toggle" onClick={this.toggleMenu}>
            <i className="fas fa-2x fa-times" />
          </div>

          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">What is UB ACM?</a>
            </li>
            <li>
              <a href="/schedule">Event Schedule</a>
            </li>
            <li>
              <a href="/join">Stay Updated</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('app__header'))
