export interface IVerifyParams {
  /**
   * Enter GST Number As An Input
   */
  gstNumber: string
}

export interface IVerifyResponse {
  data: {
    addressDetails: Record<string, unknown>
    clientId: string
    gstin: string
    panNumber: string
    businessName: string
    legalName: string
    centerJurisdiction: string
    stateJurisdiction: string
    dateOfRegistration: string
    constitutionOfBusiness: string
    taxpayerType: string
    gstinStatus: string
    dateOfCancellation: string
    fieldVisitConducted: string
    natureBusActivities: string[]
    natureOfCoreBusinessActivityCode: string
    natureOfCoreBusinessActivityDescription: string
    aadhaarValidation: string
    aadhaarValidationDate: string
    filingStatus: unknown[]
    address: string
    hsnInfo: Record<string, unknown>
    filingFrequency: unknown[]
  }
}
