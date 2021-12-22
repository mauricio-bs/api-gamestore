import { hash } from 'bcryptjs'
import { v4 } from 'uuid'

export class User {
  public readonly id: string
  public name: string
  public email: string
  public password: string
  public admin: boolean
  public is_active: boolean

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }

    if (this.password) {
      encryptPassword(this.password)
        .then(pass => (this.password = pass))
        .catch(err => {
          throw new Error(err.message)
        })
    }
  }
}

async function encryptPassword(pass: string) {
  const password_hashed = await hash(pass, 10)
  return password_hashed
}
