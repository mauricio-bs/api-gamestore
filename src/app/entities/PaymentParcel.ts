import { v4 } from 'uuid'

import { PaymentForm } from './PaymentForm'
import { Payment } from './Payment'

export class PaymentParcel {
  public readonly id: string
  public readonly payment_id: Pick<Payment, 'id'>
  public total_parcels: number
  public current_parcel: number
  public amount: number
  public status: string
  public pay_date?: Date
  public due_date: Date
  public payment_form_id: Pick<PaymentForm, 'id'>

  constructor(props: Omit<PaymentParcel, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
