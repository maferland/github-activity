import React from 'react'
import { UserActivityFeed } from '@maferland/github-activity'

const App = () => {
  const [username, setUsername] = React.useState('maferland')
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor='github-user'></label>
        <input
          id='github-user'
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
