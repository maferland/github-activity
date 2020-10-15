import React from 'react'
import ReactDOM from 'react-dom'
import { UserActivityFeed } from '@maferland/github-activity'

function App() {
  const [username, setUsername] = React.useState('maferland')
  return (
    <>
      <form>
        <label htmlFor='username'></label>
        <input
          id='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
      </form>
      <div style={{ width: '800px' }}>
        <UserActivityFeed username={username} />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
