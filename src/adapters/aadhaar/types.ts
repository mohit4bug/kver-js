export interface IGenerateOtpParams {
  aadhaarNumber: string
}
export interface IVerifyOtpParams {
  clientId: string
  otp: string
}

export interface IGenerateOtpResponse {
  message: string
}
export interface IVerifyOtpResponse {
  message: string
}
