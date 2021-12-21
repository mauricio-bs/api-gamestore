import { Manufacturer } from './Manufacturer'
import { Category } from './Category'
import { Platform } from './Platform'
import { Collection } from './Collection'
import { v4 } from 'uuid'

export class Product {
  public readonly id: string
  public name: string
  public description: string
  public stock_quantity: number
  public discount_percentage: number
  public price: number
  public path: string
  public collection?: Collection
  public platform?: Platform
  public category?: Category
  public manufacturer?: Manufacturer

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
