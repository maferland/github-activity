/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const feed = css`
  padding: 1em;
  width: 100%;
  & > * {
    margin-bottom: 1em;
  }
  :last-child {
    margin-bottom: 0;
  }
`

interface UserActivityFeedContainerProps {
  children: string | JSX.Element | JSX.Element[]
}

const UserActivityFeedContainer = ({
  children
}: UserActivityFeedContainerProps) => <div css={feed}>{children}</div>

export { UserActivityFeedContainer, UserActivityFeedContainerProps }
