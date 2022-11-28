export interface User {
  name: string
  password: string | number
  rol?: 'admin' | 'user'
  auth?: boolean
  msg?: string
}

export interface InitialState {
  userActive: User
  token: string
  allUsers: User[]
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}

export interface Context {
  state: InitialState
  register: any
  login: any
}
