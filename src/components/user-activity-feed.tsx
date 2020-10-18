/** @jsx jsx */
import { jsx } from '@emotion/core'
import fetch from 'isomorphic-fetch'
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query'
import { clamp } from '../util/clamp'
import { Activity } from './activity'
import {
  ErrorUserActivity,
  LoadingUserActivity,
  UserActivity
} from './user-activity'
import { UserActivityFeedContainer } from './user-activity-feed-container'

const queryCache = new QueryCache()

interface Props {
  username: string
  limit?: number
}

const fetchUserActivity = (username: string, limit: number) => {
  return fetch(
    `https://api.github.com/users/${username}/events?per_page=${clamp(limit)}`
  ).then(
    (res: any) => res.json(),
    (error) => error
  )
}

const UserActivityFeed = ({ username = '', limit = 10 }: Props) => {
  const { isLoading, error, data = [] } = useQuery<Activity[]>(
    `${username}-activity`,
    () => fetchUserActivity(username, limit)
  )

  if (isLoading) {
    const arr = Array(5).fill(null)
    return (
      <UserActivityFeedContainer>
        {arr.map((_, i) => (
          <LoadingUserActivity key={i} />
        ))}
      </UserActivityFeedContainer>
    )
  }

  if (error || !data?.map) {
    //  eslint-disable-next-line dot-notation
    const message: string = data['message'] as string
    const isNotFound = message === 'Not Found'
    return (
      <UserActivityFeedContainer>
        <ErrorUserActivity
          message={isNotFound ? `${username} was not found` : message}
        />
      </UserActivityFeedContainer>
    )
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <UserActivityFeedContainer>
        {data.map((activity: any) => (
          <UserActivity key={activity.id} activity={...activity} />
        ))}
      </UserActivityFeedContainer>
    </ReactQueryCacheProvider>
  )
}

export { UserActivityFeed }
