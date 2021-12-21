export class PaymentCondition {
  public readonly id: number
  public name: string

  constructor(props: Omit<PaymentCondition, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
