export default class Provider {
  id: string
  name: string
  email: string
  address: string
  phone: string

  constructor(provider) {
    this.id = provider.id
    this.name = provider.name
    this.email = provider.email
    this.address = provider.address
    this.phone = provider.phone
  }
}