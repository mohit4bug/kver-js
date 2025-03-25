import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseGstAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
