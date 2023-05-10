class Establishment {
  image: string
  title: string
  note: string
  content: string
  category: string
  description: string
  to: string
  id: number

  constructor(
    id: number,
    to: string,
    image: string,
    title: string,
    note: string,
    content: string,
    category: string,
    description: string
  ) {
    this.id = id
    this.to = to
    this.image = image
    this.title = title
    this.note = note
    this.content = content
    this.category = category
    this.description = description
  }
}

export default Establishment
