import type {
  IGenerateOtpParams,
  IVerifyOtpParams,
  IGenerateOtpResponse,
  IVerifyOtpResponse,
} from "@/adapters/aadhaar/types"

export interface BaseAadhaarAdapter {
  generateOtp: (params: IGenerateOtpParams) => Promise<IGenerateOtpResponse>
  verifyOtp: (params: IVerifyOtpParams) => Promise<IVerifyOtpResponse>
}
