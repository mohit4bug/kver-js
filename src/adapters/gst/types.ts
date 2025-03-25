export interface IVerifyParams {
  /**
   * Enter GST Number As An Input
   */
  gstNumber: string
}

export interface IVerifyResponse {
  data: {
    clientId: string
    email: string
    mobile: string
    fallback: boolean
    details: {
      contactDetails: {
        principal: {
          address: string
          email: string
          mobile: string
          natureOfBusiness: string
        }
        additional: {
          address: string
          email: string
          mobile: string
          natureOfBusiness: string
        }[]
      }
      promoters: string[]
      annualTurnover: string
      annualTurnoverFy: string
      percentageInCashFy: string
      percentageInCash: string
      aadhaarValidation: string
      aadhaarValidationDate: string
      addressDetails: Record<string, unknown>
      liabilityPercentageDetails: Record<string, unknown>
      lessInfo: boolean
      clientId: string | null
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
      filingStatus: unknown[]
      address: string | null
      hsnInfo: Record<string, unknown>
      filingFrequency: unknown[]
    }
  }
}
