import { BaseAadhaarAdapter } from '@/adapters/aadhaar/interface'
import type {
  IGenerateOtpParams,
  IVerifyOtpParams
} from '@/adapters/aadhaar/types'
import axios, { type AxiosInstance } from 'axios'

interface ISurepassAadhaarAdapterConfig {
  bearerToken: string
}

export class SurepassAadhaarAdapter implements BaseAadhaarAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.aadhaarkyc.io/api/v1'

  constructor(private config: ISurepassAadhaarAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  generateOtp = async (params: IGenerateOtpParams) => {
    const res = await this.axiosClient.post('/aadhaar-v2/generate-otp', {
      id_number: params.aadhaarNumber
    })
    return res.data
  }

  verifyOtp = async (params: IVerifyOtpParams) => {
    const res = await this.axiosClient.post('/aadhaar-v2/submit-otp', {
      client_id: params.clientId,
      otp: params.otp
    })
    return res.data
  }
}
