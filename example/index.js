import React from 'react'
import ReactDOM from 'react-dom'
import { UserActivityFeed } from '@maferland/github-activity'

function App() {
  return <UserActivityFeed username='maferland' />
}

ReactDOM.render(<App />, document.getElementById('root'))
