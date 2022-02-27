export default class Provider {
  id: string
  name: string
  email: string
  addres: string
  phone: string

  constructor(provider) {
    this.id = provider.id
    this.name = provider.name
    this.email = provider.email
    this.addres = provider.addres
    this.phone = provider.phone
  }
}