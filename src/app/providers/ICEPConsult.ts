interface Address {
  zip_code: string
  neighborhood: string
  country: string
  state: string
  city: string
  street: string
  readonly errors?: Array<{
    message: string
    service: string
  }>
  readonly message?: string
}

export interface ICEPConsult {
  search(cep: string): Promise<Address>
}
