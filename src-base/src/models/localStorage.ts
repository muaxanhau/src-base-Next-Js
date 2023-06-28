export type AuthModel = {
  token: string
  refreshToken: string
  role: 'student' | 'teacher'
}
export type GuestModel = {
  isGuest: boolean
}
export type SettingsModel = {
  volume: number
  isSoundTurnedOn: boolean
}
