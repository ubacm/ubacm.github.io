import React from 'react'
import ReactDOM from 'react-dom'

class CheckInsList extends React.Component {
  constructor() {
    super()

    this.state = {
      members: null,
      filter: 'all',
      search: '',
    }

    this.fetchScores = this.fetchScores.bind(this)
    this.getMembersToDisplay = this.getMembersToDisplay.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    this.fetchScores()
  }

  fetchScores() {
    fetch('https://chicken-ubacm.herokuapp.com/users/scores')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        members: json
      })
    })
    .catch(err => {
      this.setState({
        members: null,
      })
    })
  }
  
  getMembersToDisplay() {
    const { members, filter, search } = this.state
    return members.filter(member => (
      filter === 'all' || member.score > 2
    )).filter(member => (
      search.length === 0 || member.username.includes(search) || member.slack_id.includes(search) || (member.first_name + ' ' + member.last_name).includes(search)
    ))
  }
  
  handleSearchChange(event) {
    this.setState({
      search: event.target.value
    })
  }
  
  handleSelectChange(event) {
    this.setState({
      filter: event.target.value
    })
  }
  
  render() {
    const { members, filter, search } = this.state
    
    if (!members) {
      return <p>Fetching user data from server...</p>
    }

    const memberEntries = this.getMembersToDisplay().map(member => (
      <div className="member_entry" key={member.slack_id}>
        <div className="name">{member.first_name} {member.last_name}</div>
        <div className="username">{member.username}</div>
        <div className="score">{member.score}</div>
      </div>
    ))

    return (
      <div className="component__checkins_list">
        <div className="controls">
          <select onChange={this.handleSelectChange} value={filter}>
            <option value="all">Show All</option>
            <option value="voters">Eligible Voters Only</option>
          </select>
          {' '}
          <input type="text" onChange={this.handleSearchChange} value={search} />
          <span> Showing <strong>{this.getMembersToDisplay().length}</strong> members</span>
        </div>
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
