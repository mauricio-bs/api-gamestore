import { APIviaCEP } from '../../../services/viaCepApi'

interface ILocaleData {
  data: {
    cep: string
    logradouro: string
    bairro: string
    uf: string
    localidade: string
  }
}

export default {
  async getCityByZipCode(zip_code: string) {
    const { data }: ILocaleData = await APIviaCEP.get(`${zip_code}/json/`)
    const { cep, logradouro, bairro, localidade, uf } = data

    return {
      zip_code: cep,
      neighborhood: bairro,
      country: 'Brasil',
      state: uf,
      city: localidade,
      street: logradouro
    }
  }
}
