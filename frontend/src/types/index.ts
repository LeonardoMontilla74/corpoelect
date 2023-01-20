export type User = {
  idUser?: number
  name: string
  password: string | number
  rol?: 'admin' | 'user'
  auth?: boolean
}

export type MsgError = {
  msg: string
}

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
  getAllUsers: (token: string) => void
  login: ({ name, password }: User) => void
  register: ({ name, password }: User) => void
  updateUser: (token: string, idUser: number, rol?: 'admin' | 'user', auth?: boolean) => void
  deleteUser: (token: string, id: number) => void
  cleanUsers: () => void
  checkLocalStorage: () => void
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
  clientDetails?: Client
  error?: MsgError
}

export type ClientContext = {
  clientState: ClientsState
  getClient: (token: string, param: string, value: string) => void
  findClientById: (token: string, idClient: number) => void
  cleanClients: () => void
}

// ----------------NOTIFICATIONS --------------------
export type NotificationModel = {
  idNotification: number
  idClient: number
  userName: string
  type: string
  desc: string
  statusNotification: string
  createdAt?: string
  updatedAt?: string
  Clients?: Client[]
}

export type NotificationState = {
  notification?: NotificationModel,
  allNotifications?: NotificationModel[],
  error?: MsgError
}

export type NotifContext = {
  notificationState: NotificationState,
  createNotification: (token: string, notification: NotificationModel) => Promise<string>
  getNotification: (token: string, param: string, value: string) => void
  updateNotification: (token: string, idNotification: number, status: string) => void
  deleteNotification: (token: string, idNotification: number) => void
  cleanNotifications: () => void
}
