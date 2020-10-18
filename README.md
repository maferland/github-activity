<div align="center">
<h1>📊 github-activity</h1>

<p>Component displaying github activities</p>
</div>

---

[![NPM](https://img.shields.io/npm/v/@maferland/github-activity.svg)](https://www.npmjs.com/package/@maferland/github-activity) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

>

## Installation

```
npm install --save @maferland/github-activity
// or
yarn add @maferland/github-activity
```

## Usage

```tsx
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
```

## License

[MIT](LICENSE) © [maferland](https://github.com/maferland)

```

```
