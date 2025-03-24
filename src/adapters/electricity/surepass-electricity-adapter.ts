import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseElectricityAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassElectricityAdapterConfig {
  bearerToken: string
}

export class SurepassElectricityAdapter implements BaseElectricityAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassElectricityAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post('/utility/electricity/', {
        id_number: params.electricityNumber,
        operator_code: params.operatorCode
      })

      /**
       * @example
       * {
       *   "data": {
       *     "client_id": "electricity_jBxiqjAGXuymlqlbrOOb",
       *     "customer_id": "17000346322745",
       *     "operator_code": "MH",
       *     "state": "maharashtra",
       *     "full_name": "SUKHWANI",
       *     "address": "COLONY SOLAPUR ROAD NR LAD GIRNI SHEWALWADI 412307",
       *     "mobile": null,
       *     "user_email": null,
       *     "bill_amount": "1,280.00",
       *     "bill_number": null,
       *     "document_link": null
       *   },
       *   "status_code": 200,
       *   "success": true,
       *   "message": "Success",
       *   "message_code": "success"
       * }
       */
      return {
        data: {
          clientId: res.data?.data?.client_id,
          customerId: res.data?.data?.customer_id,
          operatorCode: res.data?.data?.operator_code,
          state: res.data?.data?.state,
          fullName: res.data?.data?.full_name,
          address: res.data?.data?.address,
          mobile: res.data?.data?.mobile,
          userEmail: res.data?.data?.user_email,
          billAmount: res.data?.data?.bill_amount,
          billNumber: res.data?.data?.bill_number,
          documentLink: res.data?.data?.document_link
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
