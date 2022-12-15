import { User, MsgError } from '../../../backend/src/types';

export type InitialState = {
  user: User
  token: string
  error?: MsgError
  allUsers?: User[]
}

export type ChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

export type Context = {
  state: InitialState
  register: ({ name, password }: User) => void
  login: ({ name, password }: User) => void
  getAllUsers: (token: string) => void
  updateUser: (token: string, id: number, rol?: 'admin' | 'user', auth?: boolean) => void
  deleteUser: (token: string, id: number) => void
  cleanUsers: () => void
}
