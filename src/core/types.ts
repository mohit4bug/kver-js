import { BaseAadhaarAdapter } from '../adapters/aadhaar/interface'
import { BaseDrivingLicenseAdapter } from '../adapters/driving-license/interface'
import { BaseElectricityAdapter } from '../adapters/electricity/interface'

export type TDocumentType = 'aadhaar' | 'driving-license' | 'electricity'

export type TKverAdapter<T extends TDocumentType> = T extends 'aadhaar'
  ? BaseAadhaarAdapter
  : T extends 'driving-license'
    ? BaseDrivingLicenseAdapter
    : T extends 'electricity'
      ? BaseElectricityAdapter
      : never

export interface IKverConfig<T extends TDocumentType> {
  documentType: T
  adapter: TKverAdapter<T>
}
