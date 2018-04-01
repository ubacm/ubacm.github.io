import React from 'react'
import ReactDOM from 'react-dom'

class CheckInsList extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
    }

    this.fetchScores = this.fetchScores.bind(this)
  }

  componentDidMount() {
    this.fetchScores()
  }

  fetchScores() {
    fetch('https://chicken-ubacm.herokuapp.com/users/scores')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
    .catch(err => {
      this.setState({
        data: null,
      })
    })
  }

  render() {
    if (!this.state.data) {
      return <p>Fetching user data from server...</p>
    }

    const memberEntries = this.state.data.map(member => (
      <div className="member_entry" key={member.slack_id}>
        <div className="name">{member.first_name} {member.last_name}</div>
        <div className="username">{member.username}</div>
        <div className="score">{member.score}</div>
      </div>
    ))

    return (
      <div className="component__checkins_list">
        <div className="header">
          <div className="name">Name</div>
          <div className="username">Slack Username</div>
          <div className="score">Marks</div>
        </div>
        <div className="member_entries">
          {memberEntries}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CheckInsList />, document.getElementById('app'))
