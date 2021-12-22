export class PaymentCondition {
  public readonly id: number
  public description: string
  public parcels: number
  public is_active: boolean

  constructor(props: Omit<PaymentCondition, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
