import axios, { type AxiosInstance } from 'axios'
import { ServiceUnavailableException } from '../../exceptions'
import type { BaseAadhaarAdapter } from './interface'
import type {
  IGenerateOtpParams,
  IGenerateOtpResponse,
  IVerifyOtpParams,
  IVerifyOtpResponse
} from './types'

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

  generateOtp = async (
    params: IGenerateOtpParams
  ): Promise<IGenerateOtpResponse> => {
    const res = await this.axiosClient.post('/aadhaar-v2/generate-otp', {
      id_number: params.aadhaarNumber
    })

    /**
     * @example
     * {
     *   "data": {
     *     "if_number": true,
     *     "otp_sent": true,
     *     "client_id": "takdTqhCxo"
     *   },
     *   "status_code": 200,
     *   "message": "",
     *   "success": true,
     *   "type": "aadhaar_v2_generate"
     * }
     */
    return {
      clientId: res.data.data.client_id,
      statusCode: res.data.status_code
    }
  }

  verifyOtp = async (params: IVerifyOtpParams): Promise<IVerifyOtpResponse> => {
    const res = await this.axiosClient.post('/aadhaar-v2/submit-otp', {
      client_id: params.clientId,
      otp: params.otp
    })

    const data = res.data?.data

    if (!data) {
      throw new ServiceUnavailableException("Couldn't verify OTP")
    }

    /**
     * @example
     * {
     *   "data": {
     *     "gender": "M",
     *     "address": {
     *       "loc": "mirzapur",
     *       "country": "India",
     *       "house": "tripathi haveli, mirzapur",
     *       "subdist": "mirzapur",
     *       "vtc": "mirzapur",
     *       "po": "mirzapur",
     *       "state": "uttar pradesh",
     *       "street": "tripathi lane",
     *       "dist": "mirzapur"
     *     },
     *     "aadhaar_number": "543298761234",
     *     "dob": "1990-08-31",
     *     "client_id": "ZGTaWjbbfv",
     *     "zip": "231001",
     *     "full_name": "Munna Bhaiya",
     *     "zip_data": "https://aadhaar-api-docs.s3.amazonaws.com/aadhaar_offline_xml.zip",
     *     "care_of": "S/O: Kaleen Bhaiya",
     *     "profile_image": "base64_image",
     *     "raw_xml": "https://aadhaar-api-docs.s3.amazonaws.com/aadhaar_offline_raw_xml.xml",
     *     "share_code": "1234",
     *     "mobile_verified": true,
     *     "reference_id": "123420201012232726518"
     *   },
     *   "status_code": 200,
     *   "message": "",
     *   "success": true,
     *   "type": "aadhaav_v2_model"
     * }
     */

    const gender = (() => {
      switch (res.data.data?.gender) {
        case undefined:
          return '-'
        case 'M':
          return 'MALE'
        case 'F':
          return 'FEMALE'
        default:
          return 'OTHER'
      }
    })()

    
    return {
      data: {
        gender,
        fullName: res.data.data?.full_name,
        careOf: res.data.data?.care_of,
        dob: res.data.data?.dob,
        address: {
          house: res.data.data?.address?.house,
          street: res.data.data?.address?.street,
          vtc: res.data.data?.address?.vtc,
          loc: res.data.data?.address?.loc
        },
        zip: res.data.data?.zip
      }
    }
  }
}
