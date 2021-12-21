export class PaymentForm {
  public readonly id: number
  public name: string

  constructor(props: Omit<PaymentForm, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
