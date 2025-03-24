import { BaseAadhaarAdapter } from '../adapters/aadhaar/interface'
import { BaseBankAdapter } from '../adapters/bank/interface'
import { BaseDrivingLicenseAdapter } from '../adapters/driving-license/interface'
import { BaseElectricityAdapter } from '../adapters/electricity/interface'
import { BaseRcAdapter } from '../adapters/rc/interface'
import { BaseVoterIdAdapter } from '../adapters/voter-id/interface'

export type TDocumentType =
  | 'aadhaar'
  | 'driving-license'
  | 'electricity'
  | 'voter-id'
  | 'rc'
  | 'bank'

type AdapterMap = {
  aadhaar: BaseAadhaarAdapter
  'driving-license': BaseDrivingLicenseAdapter
  electricity: BaseElectricityAdapter
  'voter-id': BaseVoterIdAdapter
  rc: BaseRcAdapter
  bank: BaseBankAdapter
}

export type TKverAdapter<T extends TDocumentType> = T extends keyof AdapterMap
  ? AdapterMap[T]
  : never

export interface IKverConfig<T extends TDocumentType> {
  documentType: T
  adapter: TKverAdapter<T>
}
