import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      showMobileMenu: false,
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    })
  }

  render() {
    const { showMobileMenu } = this.state

    return (
      <div className="component__header">
        <div className="container">
          <div className="wrapper">
            <div className="branding">
              <a href="/"><img className="logo" src="/assets/ubacm.png" /></a>
            </div>
            <div className="navigation">
              <ul className="links">
                <li><a href="/">Home</a></li>
              </ul>
              <ul className="links">
                <li><a href="/about">What is UB ACM?</a></li>
              </ul>
              <ul className="links">
                <li><a href="/schedule">Event Schedule</a></li>
              </ul>
              <ul className="links">
                <li><a href="/join">Stay Updated</a></li>
              </ul>
              <div className="mobile_menu_toggle" onClick={this.toggleMobileMenu}>
                <i className="fas fa-2x fa-bars"></i>
              </div>
            </div>
          </div>
          <div className="expansion animated fadeIn">
            <div className="menu">
              <ul className="links">
                <li className="links_width">What is UB ACM?</li>
                <li><a className="title" href="/checkins">How to Check In</a></li>
                <li className="indent"><a href="/checkins/list">Check-In Marks Log</a></li>
                <li><br /></li>
                <li><a className="title" href="/team">Leadership Team</a></li>
              </ul>
              <ul className="links">
                <li className="links_width">Event Schedule</li>
                <li><a className="title" href="/hack">Hack Night <img className="img_icon" src="/assets/hacknight.png" /></a></li>
                <li className="indent"><a href="/hack#prizes">Prizes</a></li>
                <li className="indent"><a href="/hack#resumes">Resumes</a></li>
              </ul>
              <ul className="links">
                <li className="links_width">Stay Updated</li>
                <li><a href="/conduct">Code of Conduct</a></li>
                <li><a href="https://ubacm.slack.com/signup" target="_blank">Slack <i className="fas fa-external-link-alt"></i></a></li>
                <li><a href="https://github.com/ubacm" target="_blank">GitHub <i className="fas fa-external-link-alt"></i></a></li>
                <li><a href="https://www.facebook.com/ubacm.org" target="_blank">Facebook <i className="fas fa-external-link-alt"></i></a></li>

              </ul>
            </div>
          </div>
        </div>
    
        <div className={`mobile_nav${showMobileMenu ? ' show_nav' : ''}`}>
          <div className="mobile_menu_toggle" onClick={this.toggleMobileMenu}>
            <i className="fas fa-2x fa-times"></i>
          </div>
    
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">What is UB ACM?</a></li>
            <li><a href="/schedule">Event Schedule</a></li>
            <li><a href="/join">Stay Updated</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('app__header'))
