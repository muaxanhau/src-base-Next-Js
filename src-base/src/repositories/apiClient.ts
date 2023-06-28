import { baseUrl, tokenType } from '@/config'
import { AuthModel } from '@/models'
import { LocalStorageKeys, localStorageUtils } from '@/utils/localStorage'
import { utils } from '@/utils/utils'
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const apiClient = axios.create({
  baseURL: baseUrl,
})

const handleRequest = (config: InternalAxiosRequestConfig) => {
  console.warn(config.method + ' - ' + config.url)
  const token = localStorageUtils.retrieveItem<AuthModel>(LocalStorageKeys.Auth)?.token
  token?.length && (config.headers['Authorization'] = `${tokenType} ${token}`)
  return config
}
const handleResponse = (reponse: AxiosResponse) => {
  const camelResponse = utils.keysToCamel(reponse)
  return camelResponse
}
const handleError = (e: AxiosError) => {
  const errorMessage = e.config?.url + ' - ' + e.message
  return Promise.reject(errorMessage)
}

apiClient.interceptors.request.use(handleRequest, handleError)
apiClient.interceptors.response.use(handleResponse, handleError)

export default apiClient
