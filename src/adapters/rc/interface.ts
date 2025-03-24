import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseRcAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
