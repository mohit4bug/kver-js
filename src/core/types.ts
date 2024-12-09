import { BaseAadhaarAdapter } from '../adapters/aadhaar/interface'

export type TDocumentType = 'aadhaar' | 'pan'

export type TKverAdapter<T extends TDocumentType> = T extends 'aadhaar'
  ? BaseAadhaarAdapter
  : T extends 'pan'
    ? {} // `BasePanAdapter`
    : never

export interface IKverConfig<T extends TDocumentType> {
  documentType: T
  adapter: TKverAdapter<T>
}
