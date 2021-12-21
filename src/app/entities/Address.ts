import { City } from './City'
import { State } from './State'
import { Country } from './Country'

import { v4 } from 'uuid'

export class Address {
  public readonly id: string
  public zip_code: string
  public country: Country
  public state: State
  public city: City
  public neighborhood: string
  public street: string
  public number: number
  public complement?: string
  public reference_point?: string

  constructor(props: Omit<Address, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
