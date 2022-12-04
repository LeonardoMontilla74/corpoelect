export type User = {
  name: string
  password: string | number
  rol?: 'admin' | 'user'
  auth?: boolean
}

export type MsgError = {
  msg: string
}
