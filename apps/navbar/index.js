import React from 'react'
import ReactDOM from 'react-dom'
import M from 'materialize-css'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const {showMenu} = this.state

    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="z-depth-1">
            <div className="container">
              <a href="/" className="brand-logo">
                <img className="logo" src="/assets/ubacm.png" />
                <span className="branding">UB ACM</span>
              </a>
              <a
                href="#"
                data-target="mobile_nav"
                className="sidenav-trigger show-on-large"
              >
                <i className="fas fa-bars" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/schedule">Event Schedule</a>
                </li>
                <li>
                  <a href="/join">Stay Updated</a>
                </li>
                <li>
                  <a
                    href="https://apps.ubacm.org/"
                    className="btn waves-effect waves-light"
                  >
                    Apps
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile_nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="/assets/davis_new.jpg" />
              </div>
              <h4 className="white-text">UB ACM</h4>
            </div>
          </li>
          <li>
            <a className="waves-effect" href="https://apps.ubacm.org/">
              <i className="fas fa-user" />
              Chapter Apps
            </a>
          </li>
          <li>
            <a
              className="waves-effect"
              href="https://apps.ubacm.org/events/check-in/"
            >
              Check In
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Chapter Activities</a>
          </li>
          <li>
            <a className="waves-effect" href="/join">
              Stay Updated
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/schedule">
              Event Schedule
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/hack">
              <i>
                <img className="img_icon" src="/assets/hacknights/logo.png" />
              </i>
              Hack Nights
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/space">
              <i>
                <img className="img_icon" src="/assets/hackspace/logo.png" />
              </i>
              Hackspace
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">UB ACM</a>
          </li>
          <li>
            <a className="waves-effect" href="/about">
              About UB ACM
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/team">
              Leadership Team
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/conduct">
              Code of Conduct
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/constitution">
              Chapter Constitution
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Social</a>
          </li>
          <li>
            <a className="waves-effect" href="https://ubacm.slack.com/signup" target="_blank">
              <i className="fas fa-external-link-alt" />
              Slack
            </a>
          </li>
          <li>
            <a className="waves-effect" href="https://www.facebook.com/ubacm.org" target="_blank">
              <i className="fas fa-external-link-alt" />
              Facebook
            </a>
          </li>
          <li>
            <a className="waves-effect" href="https://github.com/ubacm" target="_blank">
              <i className="fas fa-external-link-alt" />
              GitHub
            </a>
          </li>
        </ul>
      </React.Fragment>
    )

    return (
      <div className="navbar">
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
                  </a>
                </li>
                <li className="indent">
                  <a href="/hack/prizes">Prizes</a>
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

ReactDOM.render(<Navbar />, document.getElementById('app__navbar'))
