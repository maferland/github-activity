interface Activity {
  id: number
  repo: { url: string; name: string }
  // eslint-disable-next-line camelcase
  actor: { display_login: string; avatar_url: string }
  type: string
}

export { Activity }