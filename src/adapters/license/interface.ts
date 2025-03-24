import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseLicenseAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
