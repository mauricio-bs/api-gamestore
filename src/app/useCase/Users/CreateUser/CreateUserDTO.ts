export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
  admin: boolean
  is_active: boolean
}
