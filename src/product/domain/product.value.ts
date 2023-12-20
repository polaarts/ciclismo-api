import { type ProductEntity } from './product.entity'

export class ProductValue implements ProductEntity {
  id: string
  id_tienda: string
  name: string
  price: number
  image: string
  url: string

  constructor ({ id, id_tienda: tienda, name, price, image, url }: ProductEntity) {
    this.id = id
    this.id_tienda = tienda
    this.name = name
    this.price = price
    this.image = image
    this.url = url
  }
}
