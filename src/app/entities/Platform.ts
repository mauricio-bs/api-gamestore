import { v4 } from 'uuid'

export class Platform {
  public readonly id: string
  public name: string

  constructor(props: Omit<Platform, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
