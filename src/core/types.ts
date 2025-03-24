import { BaseAadhaarAdapter } from '../adapters/aadhaar/interface'
import { BaseLicenseAdapter } from '../adapters/license/interface'

export type TDocumentType = 'aadhaar' | 'license'

export type TKverAdapter<T extends TDocumentType> = T extends 'aadhaar'
  ? BaseAadhaarAdapter
  : T extends 'license'
    ? BaseLicenseAdapter
    : never

export interface IKverConfig<T extends TDocumentType> {
  documentType: T
  adapter: TKverAdapter<T>
}
