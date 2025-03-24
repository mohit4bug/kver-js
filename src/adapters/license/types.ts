export interface IVerifyParams {
  licenseNumber: string

  /**
   * Date of birth in YYYY-MM-DD format.
   */
  dateOfBirth: `${number}-${number}-${number}`
}

export interface IVerifyResponse {
  data: {
    temporaryAddress: string
    fatherOrHusbandName: string
    licenseExpiryDate: string
    temporaryZip: string
    permanentAddress: string
    licenseIssueDate: string
    clientId: string
    citizenship: string
    dateOfBirth: string
    permanentZip: string
    gender: string
    licenseNumber: string
    name: string
    state: string
    olaName: string
    olaCode: string
  }
}
