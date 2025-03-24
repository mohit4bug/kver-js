export interface IVerifyParams {
  /**
   * EPIC (Electors Photo Identity Card) Number As A Input
   */
  voterIdNumber: string
}

export interface IVerifyResponse {
  data: {
    clientId: string
    inputVoterId: string
    epicNo: string
    gender: string
    state: string
    name: string
    relationName: string
    relationType: string
    houseNo: string | null
    dob: string | null
    age: string
    area: string
    district: string
    additionalCheck: any[]
    multiple: boolean
    lastUpdate: string | null
    assemblyConstituency: string
    assemblyConstituencyNumber: string
    pollingStation: string
    partNumber: string
    partName: string
    slnoInPart: string
    psLatLong: string
    rlnNameV1: string
    rlnNameV2: string
    rlnNameV3: string
    sectionNo: string
    nameV1: string
    nameV2: string
    nameV3: string
    parliamentaryName: string
    parliamentaryNumber: string
    stCode: string
    parliamentaryConstituency: string
    id: string
  }
}
