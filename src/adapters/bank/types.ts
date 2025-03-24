export interface IVerifyParams {
  bankAccountNumber: string
  ifsc: string
  /**
   * Extra Optional Parameter For More Details
   */
  ifscDetails: boolean
}

type IfscDetails = {
  id: number
  ifsc: string
  micr: string
  iso3166: string
  swift: string | null
  bank: string
  bankCode: string
  bankName: string
  branch: string
  centre: string
  district: string
  state: string
  city: string
  address: string
  contact: string
  imps: boolean
  rtgs: boolean
  neft: boolean
  upi: boolean
  micrCheck: boolean
}

export interface IVerifyResponse {
  data: {
    clientId: string
    accountExists: boolean
    upiId: string | null
    fullName: string
    impsRefNo: string
    remarks: string
    status: string
    ifscDetails: IfscDetails
  }
}
