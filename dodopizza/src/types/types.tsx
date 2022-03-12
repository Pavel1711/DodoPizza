export interface IEntity {
  id: number,
  title: string,
  composition: string,
  price: number,
  size: Array<{
    name: string,
    price: number
  }>,
  media: string
}