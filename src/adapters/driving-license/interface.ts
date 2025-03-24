import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseDrivingLicenseAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
