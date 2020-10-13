import fetch from 'isomorphic-fetch'
import React from 'react'
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query'
import { UserActivity } from './user-activity'

const queryCache = new QueryCache()

interface Props {
  username: string
  limit?: number
}

const clamp = (number: number, min: number = 0, max: number = 100) =>
  Math.max(Math.min(number, max), min)

const UserActivityFeed = ({ username, limit = 10 }: Props) => {
  const { isLoading, error, data } = useQuery(`${username} activity`, () =>
    fetch(
      `https://api.github.com/users/${username}/events?per_page${clamp(limit)}`
    ).then((res: any) => res.json())
  )

  if (isLoading) return <div>'Loading...'</div>

  if (error)
    return <div>{`An error has occurred:${(error as any).message}`}</div>

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {data &&
        data.map((event: any) => <UserActivity key={event.id} {...event} />)}
    </ReactQueryCacheProvider>
  )
}

export { UserActivityFeed }
