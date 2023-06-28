export const appName = 'Meva'

const baseUrls = {
  development: 'https://meva-api-dev.fabaserver.xyz',
  staging: 'https://meva-api-staging.fabaserver.xyz',
  production: 'https://meva-api-prod.meva.edu.vn',
}
export const baseUrl = baseUrls.development

export const tokenType = 'Bearer'

const versions = {
  development: {
    phase: 1,
    release: 0,
    build: 0,
  },
  buildStaging: {
    phase: 1,
    release: 0,
    build: 0,
  },
  production: {
    phase: 1,
    release: 0,
    build: 0,
  },
}
const version = versions.development
export const appVersion = `${version.phase}.${version.release}.${version.build}`
export const serverVersion = parseInt(`${version.phase}${version.release}`)
