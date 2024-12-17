export type ServiceResponseErrorType =
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'INVALID_DATA'

export type serviceResponseError = {
  status: ServiceResponseErrorType
  data: {
    message: string
  }
}

export type UserProfileData = {
  email: string
  name: string
}

export type ServiceResponseSuccess<T> = {
  status: 'OK' | 'CREATED'
  data: T
}

export type ServiceResponse<T> =
  | ServiceResponseSuccess<T>
  | serviceResponseError
