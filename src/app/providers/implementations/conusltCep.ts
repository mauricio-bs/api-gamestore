import cepPromise from 'cep-promise'

interface ILocaleData {
  cep: string
  street: string
  neighborhood: string
  city: string
  state: string
  readonly errors?: Array<{
    message: string
    service: string
  }>
  readonly message?: string
}

export default {
  async getCityByZipCode(zip_code: string) {
    const data: ILocaleData = await cepPromise(zip_code)

    if (data.errors) {
      throw new Error(data.message)
    }

    const { cep, state, city, street, neighborhood } = data

    return {
      zip_code: cep,
      neighborhood,
      country: 'Brasil',
      state,
      city,
      street
    }
  }
}
