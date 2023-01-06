export type User = {
  id?: number
  name: string
  password: string | number
  rol?: 'admin' | 'user'
  auth?: boolean
}

export type MsgError = {
  msg: string
}

export type Client = {
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
  id: number
}

export type NotificationModel = {
  idNotification: number
  idClient: number
  idUser: number
  type: string
  desc: string
  statusNotification: string
}
