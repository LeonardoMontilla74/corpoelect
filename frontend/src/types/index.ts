import { User, MsgError, NotificationModel } from '../../../backend/src/types';

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
  userState: InitialState
  register: ({ name, password }: User) => void
  login: ({ name, password }: User) => void
  getAllUsers: (token: string) => void
  updateUser: (token: string, id: number, rol?: 'admin' | 'user', auth?: boolean) => void
  deleteUser: (token: string, id: number) => void
  cleanUsers: () => void
}

// _____________ Clients ________________
export type Client = {
  idClient: number
  AMP_PRI: string
  AMP_SEC: string
  ANLAGE: string
  AOL: string
  BAUFORM: string
  CIAU_ORIGEN: string
  CICNOR: string
  CODIGO_POSTAL: string
  CONTRATO: string
  CTC: string
  CUENTA_ANTIGUA: string
  DAC: string
  DEUDA: string
  DEVLOC: string
  DIRECCION: string
  EQUNR: string
  FACTURAS: string
  GPART: string
  HAUS: string
  HERST: string
  ITINERARIO: string
  NIC: string
  NOMBRE: string
  OFICINA: string
  RUTA: string
  RUTA_OPEN: string
  SERNR: string
  TARIFTYP_AB: string
  TIPO_CLIENTE: string
  TIPO_TARIFA: string
  TIPO_USUARIO: string
  TLF: string
  UND_LECT: string
  UND_LECT2: string
  VERTRAG: string
  VKONTO: string
  VOL_PRI: string
  VOL_SEC: string
  VSTELLE: string
  Notifications?: NotificationModel[]
}

export type ClientsState = {
  client?: Client[]
  error?: MsgError
  notifications?: NotificationModel[]
}

export type ClientContext = {
  clientState: ClientsState
  getClient: (param: string, value: string) => void
  cleanClients: () => void
  createNotification: (notification: NotificationModel) => Promise<string>
  getAllNotifications: (token: string) => void
  deleteNotification: (token: string, idNotification: number) => void
}
