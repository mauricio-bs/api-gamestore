import { v4 } from 'uuid'

export class Collection {
  public readonly id: string
  public name: string

  constructor(props: Omit<Collection, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
