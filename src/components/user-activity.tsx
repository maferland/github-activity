/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Activity } from './activity'

interface Props {
  activity: Activity
}

const activityStyle = css`
  --pink: #ee4266;
  --white: #fff;
  --black: #303030;
  --grey: #999;
  --linear-transition: 0.2s linear;
  --font-size: 1.1em;

  max-width: 100%;
  position: relative;
  color: var(--black);
  font-size: var(--font-size);

  display: flex;
  align-items: center;

  border: 2px solid var(--black);
  border-radius: 1em;
  padding: 1em 2em;

  transition: box-shadow var(--linear-transition),
    transform var(--linear-transition);

  box-shadow: 1px 1px 0px var(--grey), 2px 2px 0px var(--grey),
    3px 3px 0px var(--grey), 4px 4px 0px var(--grey), 5px 5px 0px var(--grey),
    6px 6px 0px var(--grey);

  &:hover {
    transform: translateX(-3px) translateY(-3px);
    box-shadow: 1px 1px 0px var(--pink), 2px 2px 0px var(--pink),
      3px 3px 0px var(--pink), 4px 4px 0px var(--pink), 5px 5px 0px var(--pink),
      6px 6px 0px var(--pink);
  }

  &:last-of-type {
    margin-bottom: 1.5em;
  }
`

const emojis = {
  PullRequestEvent: '🔨',
  WatchEvent: '👀',
  CreateEvent: '🐤',
  DeleteEvent: '🔥',
  PushEvent: '📌',
  ForkEvent: '🍴',
  default: '🙈'
}

const details = {
  PullRequestEvent: ' opened a pull request on ',
  WatchEvent: ' started watching ',
  CreateEvent: ' created something on ',
  DeleteEvent: ' deleted something on ',
  PushEvent: ' pushed something to ',
  ForkEvent: ' forked ',
  default: ' oops, this event is not implemented '
}

const UserActivity = (props: Props) => {
  const {
    activity: { type, actor, repo }
  } = props

  const typeIcon = emojis[type] || emojis.default
  const detail = details[type] || details.default

  return (
    <div css={activityStyle}>
      <img
        css={{ borderRadius: '50%', height: '60px', border: '2px solid black' }}
        src={actor.avatar_url}
        alt={`${actor.display_login}'s avatar`}
      />
      <div
        css={css`
          text-align: center;
          width: 100%;
        `}
      >
        <span css={{ padding: '0.5em', fontSize: '2em' }}>{typeIcon}</span>
        <span>
          <a href={`https://github.com/${actor.display_login}`}>
            {actor.display_login}
          </a>
          {detail}
        </span>
        <a href={repo.url}>{repo.name}</a>
      </div>
    </div>
  )
}

export { UserActivity }
