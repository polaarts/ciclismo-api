// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductEntity } from './product.entity'

export class ProductValue implements ProductEntity {
  constructor (
    public readonly id: string,
    public readonly id_tienda: string,
    public readonly name: string,
    public readonly price: number,
    public readonly image: string,
    public readonly url: string
  ) {}
}
