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
    gender: 'MALE' | 'FEMALE' | 'OTHER' | '-'
    fullName: string
    careOf: string
    dob: string
    address: {
      house: string
      street: string
      vtc: string
      loc: string
    }
    zip: string
  }
}
