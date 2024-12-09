export interface IGenerateOtpParams {
  aadhaarNumber: string
}
export interface IVerifyOtpParams {
  clientId: string
  otp: string
}

export interface IGenerateOtpResponse {
  clientId: string
  statusCode: number
}
export interface IVerifyOtpResponse {
  data: {
    gender: 'M' | 'F'
    fullName: string
  }
}
