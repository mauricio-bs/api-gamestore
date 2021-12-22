import { User } from './User'
import { Payment } from './Payment'
import { Product } from './Product'

import { v4 } from 'uuid'

export class Sale {
  public readonly id: string
  public products: Product[]
  public amount: number
  public discount_percentage: number
  public discount_value: number
  public payment: Pick<Payment, 'id'>
  public user_id: Pick<User, 'id' | 'email'>
  public date: Date
  public status: string

  constructor(props: Omit<Sale, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
