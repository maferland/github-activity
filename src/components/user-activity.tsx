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
  --lightGrey: gainsboro;
  --linear-transition: 0.2s linear;
  --font-size: 1.1em;

  max-width: 100%;
  position: relative;
  color: var(--black);
  font-size: var(--font-size);
  min-height: 75px;
  max-height: 75px;

  display: flex;
  align-items: center;

  border: 2px solid var(--black);
  border-radius: 1em;
  padding: 0.75em;

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

const text = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 1.25em;
`

const image = css`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: 1px 1px 3px var(--grey);
  background-color: var(--lightGrey);
`

const icon = css`
  padding: 0.1em;
  font-size: 1.5em;
`

const placeholder = css`
  width: 300px;
  box-shadow: 1px 1px 3px var(--grey);
  background: var(--lightGrey);
`

const emojis = {
  PullRequestEvent: '🔨',
  WatchEvent: '👀',
  CreateEvent: '🐤',
  DeleteEvent: '🔥',
  PushEventBranch: '📌',
  PushEventTag: '📌',
  PushEvent: '📌',
  ForkEvent: '🍴',
  PullRequestReviewEvent: '🧐',
  PullRequestReviewCommentEvent: '🔬',
  default: '🙈'
}

const details = {
  PullRequestEvent: ' opened a pull request on ',
  WatchEvent: ' started watching ',
  CreateEventBranch: ' created a branch on ',
  DeleteEventTag: ' deleted a tag on ',
  PushEventBranch: ' pushed a branch to ',
  PushEventTag: ' pushed a tag to ',
  PushEvent: ' pused something to',
  ForkEvent: ' forked ',
  PullRequestReviewEvent: ' is reviewing ',
  PullRequestReviewCommentEvent: ' is reviewing ',
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
        css={image}
        src={actor.avatar_url}
        alt={`${actor.display_login}'s avatar`}
      />
      <div css={text}>
        <span>
          <a href={`https://github.com/${actor.display_login}`}>
            {actor.display_login}
          </a>
          {detail}
          <a href={`https://github.com/${repo.name}`}>{repo.name}</a>
        </span>

        <span css={icon}>{typeIcon}</span>
      </div>
    </div>
  )
}

const LoadingUserActivity = () => {
  return (
    <div css={activityStyle}>
      <div css={image} />
      <div css={text}>
        <div css={placeholder}>&nbsp;</div>
        <span css={{ icon, opacity: 0.75 }}>⌛</span>
      </div>
    </div>
  )
}

interface UserErrorActivityProps {
  message: string
}

const ErrorUserActivity = (props?: UserErrorActivityProps) => {
  return (
    <div css={activityStyle}>
      <div css={image} />
      <div css={text}>
        <div>{props?.message}</div>
        <span css={{ icon, opacity: 0.75 }}>🙁</span>
      </div>
    </div>
  )
}

ErrorUserActivity.defaultProps = { message: 'Something went wrong' }

export { UserActivity, LoadingUserActivity, ErrorUserActivity }
