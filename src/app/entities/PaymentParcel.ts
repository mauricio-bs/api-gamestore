import { PaymentForm } from './PaymentForm'
import { v4 } from 'uuid'

export class PaymentParcel {
  public readonly id: string
  public readonly payment_id: string
  public total_parcels: number
  public current_parcel: number
  public amount: number
  public status: number
  public payment_form: PaymentForm

  constructor(props: Omit<PaymentParcel, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
