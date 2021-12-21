import { PaymentForm } from './PaymentForm'
import { PaymentCondition } from './PaymentCondition'
import { v4 } from 'uuid'

export class Payment {
  public readonly id: string
  public readonly customer_id: string
  public readonly user_id: string
  public amount: number
  public payment_condition: PaymentCondition
  public payment_form: PaymentForm

  constructor(props: Omit<Payment, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
