export interface IVerifyParams {
  electricityNumber: string
  operatorCode: string
}

export interface IVerifyResponse {
  data: {
    clientId: string
    customerId: string
    operatorCode: string
    state: string
    fullName: string
    address: string
    mobile: string | null
    userEmail: string | null
    billAmount: number
    billNumber: string | null
    documentLink: string | null
  }
}
