import React from 'react'

const UserActivity = (props: any) => {
  console.log(props)

  return (
    <div>
      <div>
        {props.id} - {props.type}
      </div>
      <a href={props.repo.url}>{props.repo.name}</a>
    </div>
  )
}

export { UserActivity }
