import React from 'react'
import { UserActivityFeed } from '@maferland/github-activity'

const App = () => {
  const [username, setUsername] = React.useState('maferland')
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
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

export default App
