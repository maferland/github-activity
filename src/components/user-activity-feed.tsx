/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import fetch from 'isomorphic-fetch'
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query'
import { Activity } from './activity'
import { UserActivity } from './user-activity'

const queryCache = new QueryCache()

interface Props {
  username: string
  limit?: number
}

// 100 is the max value for per_page on this GithubApi request
const clamp = (number: number, min: number = 0, max: number = 100) =>
  Math.max(Math.min(number, max), min)

const UserActivityFeed = ({ username = '', limit = 10 }: Props) => {
  const { isLoading, error, data } = useQuery<Activity[]>(
    `${username}-activity`,
    () =>
      fetch(
        `https://api.github.com/users/${username}/events?per_page=${clamp(
          limit
        )}`
      ).then((res: any) => res.json())
  )

  if (isLoading) return <div>'Loading...'</div>

  if (error)
    return <div>{`An error has occurred:${(error as any).message}`}</div>

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div
        css={css`
          padding: 1em;
          width: 100%;
          & > * {
            margin-bottom: 1em;
          }
          :last-child {
            margin-bottom: 0;
          }
        `}
      >
        {data &&
          data.map((activity: any) => (
            <UserActivity key={activity.id} activity={...activity} />
          ))}
      </div>
    </ReactQueryCacheProvider>
  )
}

export { UserActivityFeed }
