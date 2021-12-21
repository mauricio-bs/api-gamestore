import { v4 } from 'uuid'

export class CardFlag {
  public readonly id: number
  public flag: string
  public t_brand: string

  constructor(props: Omit<CardFlag, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
