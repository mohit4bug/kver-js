import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseBankAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
