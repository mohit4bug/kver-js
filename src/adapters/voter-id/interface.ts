import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseVoterIdAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
