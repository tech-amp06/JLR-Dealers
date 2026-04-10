import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jlr-dealers.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 12000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('dealer_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
