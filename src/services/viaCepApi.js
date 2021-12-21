import axios from 'axios'

const APIviaCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export { APIviaCEP }
