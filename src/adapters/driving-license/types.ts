export interface IVerifyParams {
  licenseNumber: string

  /**
   * Date of birth in YYYY-MM-DD format.
   */
  dateOfBirth: `${number}-${number}-${number}`
}

export interface IVerifyResponse {
  data: {
    clientId: string
    licenseNumber: string
    state: string
    name: string
    permanentAddress: string
    permanentZip: string
    temporaryAddress: string
    temporaryZip: string
    citizenship: string
    olaName: string
    olaCode: string
    gender: string
    fatherOrHusbandName: string
    dob: string
    doe: string
    transportDoe: string
    doi: string
    transportDoi: string
    profileImage: string
    hasImage: boolean
    bloodGroup: string
    vehicleClasses: string[]
    lessInfo: boolean
  }
}
