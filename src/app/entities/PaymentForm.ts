export class PaymentForm {
  public readonly id: number
  public description: string
  public is_active: boolean

  constructor(props: Omit<PaymentForm, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
