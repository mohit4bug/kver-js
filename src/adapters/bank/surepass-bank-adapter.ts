import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseBankAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassBankAdapterConfig {
  bearerToken: string
}

export class SurepassBankAdapter implements BaseBankAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassBankAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post('/bank-verification', {
        id_number: params.bankAccountNumber,
        ifsc: params.ifsc,
        ifsc_details: params.ifscDetails
      })

      /**
       * @example
       * {
       *   "data": {
       *     "client_id": "bank_validation_pjTDReiGjNBputtmJIGC",
       *     "account_exists": true,
       *     "upi_id": null,
       *     "full_name": "A YADAV",
       *     "imps_ref_no": "506026134771",
       *     "remarks": "",
       *     "status": "success",
       *     "ifsc_details": {
       *       "id": 0,
       *       "ifsc": "CNRB0000000",
       *       "micr": "123456789",
       *       "iso3166": "IN-UP",
       *       "swift": null,
       *       "bank": "C Bank",
       *       "bank_code": "CNRB",
       *       "bank_name": "C Bank",
       *       "branch": "AGRA",
       *       "centre": "AGRA",
       *       "district": "AGRA",
       *       "state": "UTTAR PRADESH",
       *       "city": "AGRA",
       *       "address": "AAGRA (UP",
       *       "contact": "+911234567890",
       *       "imps": true,
       *       "rtgs": true,
       *       "neft": true,
       *       "upi": true,
       *       "micr_check": true
       *     }
       *   },
       *   "status_code": 200,
       *   "success": true,
       *   "message": null,
       *   "message_code": "success"
       * }
       */
      return {
        data: {
          clientId: res.data?.data?.client_id,
          accountExists: res.data?.data?.account_exists,
          upiId: res.data?.data?.upi_id,
          fullName: res.data?.data?.full_name,
          impsRefNo: res.data?.data?.imps_ref_no,
          remarks: res.data?.data?.remarks,
          status: res.data?.data?.status,
          ifscDetails: {
            id: res.data?.data?.ifsc_details?.id,
            ifsc: res.data?.data?.ifsc_details?.ifsc,
            micr: res.data?.data?.ifsc_details?.micr,
            iso3166: res.data?.data?.ifsc_details?.iso3166,
            swift: res.data?.data?.ifsc_details?.swift,
            bank: res.data?.data?.ifsc_details?.bank,
            bankCode: res.data?.data?.ifsc_details?.bank_code,
            bankName: res.data?.data?.ifsc_details?.bank_name,
            branch: res.data?.data?.ifsc_details?.branch,
            centre: res.data?.data?.ifsc_details?.centre,
            district: res.data?.data?.ifsc_details?.district,
            state: res.data?.data?.ifsc_details?.state,
            city: res.data?.data?.ifsc_details?.city,
            address: res.data?.data?.ifsc_details?.address,
            contact: res.data?.data?.ifsc_details?.contact,
            imps: res.data?.data?.ifsc_details?.imps,
            rtgs: res.data?.data?.ifsc_details?.rtgs,
            neft: res.data?.data?.ifsc_details?.neft,
            upi: res.data?.data?.ifsc_details?.upi,
            micrCheck: res.data?.data?.ifsc_details?.micr_check
          }
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
