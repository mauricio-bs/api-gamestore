interface Address {
  zip_code: string
  neighborhood: string
  country: string
  state: string
  city: string
  street: string
}

export interface ICEPConsult {
  search(cep: string): Promise<Address>
}
