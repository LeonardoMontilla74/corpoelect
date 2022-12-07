import { User, MsgError } from '../../../backend/src/types';

export type InitialState = {
  userActive: User
  token: string
  error?: MsgError
  allUsers?: User[]
}

export type ChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

export type Context = {
  state: InitialState
  register: any
  login: any
  getAllUsers: any
}
