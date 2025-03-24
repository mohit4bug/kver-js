import type { IVerifyParams, IVerifyResponse } from './types'

export interface BaseElectricityAdapter {
  verify: (params: IVerifyParams) => Promise<IVerifyResponse>
}
