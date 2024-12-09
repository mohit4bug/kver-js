import type {
  IGenerateOtpParams,
  IGenerateOtpResponse,
  IVerifyOtpParams,
  IVerifyOtpResponse
} from './types'

export interface BaseAadhaarAdapter {
  generateOtp: (params: IGenerateOtpParams) => Promise<IGenerateOtpResponse>
  verifyOtp: (params: IVerifyOtpParams) => Promise<IVerifyOtpResponse>
}
