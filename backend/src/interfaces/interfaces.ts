export interface UserModel {
  name: string
  password: string | number
  rol?: 'admin' | 'user'
  auth?: boolean
}
