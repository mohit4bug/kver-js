export interface IVerifyParams {
  /**
   * Enter Vehicle RC number as a input
   */
  rcNumber: string
}

export interface IVerifyResponse {
  data: {
    clientId: string
    rcNumber: string
    registrationDate: string
    ownerName: string
    fatherName: string
    presentAddress: string
    permanentAddress: string
    mobileNumber: string
    vehicleCategory: string
    vehicleChasiNumber: string
    vehicleEngineNumber: string
    makerDescription: string
    makerModel: string
    bodyType: string
    fuelType: string
    color: string
    normsType: string
    fitUpTo: string
    financer: string
    financed: boolean
    insuranceCompany: string
    insurancePolicyNumber: string
    insuranceUpto: string
    manufacturingDate: string
    manufacturingDateFormatted: string
    registeredAt: string
    latestBy: string
    lessInfo: boolean
    taxUpto: string | null
    taxPaidUpto: string
    cubicCapacity: string
    vehicleGrossWeight: string
    noCylinders: string
    seatCapacity: string
    sleeperCapacity: string | null
    standingCapacity: string | null
    wheelbase: string
    unladenWeight: string
    vehicleCategoryDescription: string
    puccNumber: string
    puccUpto: string | null
    permitNumber: string
    permitIssueDate: string | null
    permitValidFrom: string | null
    permitValidUpto: string
    permitType: string
    nationalPermitNumber: string | null
    nationalPermitUpto: string | null
    nationalPermitIssuedBy: string | null
    nonUseStatus: string | null
    nonUseFrom: string | null
    nonUseTo: string | null
    blacklistStatus: string | null
    nocDetails: string | null
    ownerNumber: string
    rcStatus: string | null
    maskedName: boolean
    challanDetails: string | null
    variant: string | null
  }
}
