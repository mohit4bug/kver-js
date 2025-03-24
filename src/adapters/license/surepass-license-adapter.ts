import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseLicenseAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassLicenseAdapterConfig {
  bearerToken: string
}

export class SurepassLicenseAdapter implements BaseLicenseAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.aadhaarkyc.io/api/v1'

  constructor(private config: ISurepassLicenseAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post(
        '/driving-license/driving-license',
        {
          id_number: params.licenseNumber,
          dob: params.dateOfBirth
        }
      )

      /**
       * @example
       * {
       *   "data": {
       *     "temporary_address": "TRIPATHI HAVELI, MIRZAPUR",
       *     "father_or_husband_name": "KALEEN BHAIYA",
       *     "doe": "2032-07-23",
       *     "temporary_zip": "231001",
       *     "permanent_address": "TRIPATHI HAVELI, MIRZAPUR",
       *     "doi": "2012-07-24",
       *     "client_id": "dIysSjHnIG",
       *     "citizenship": "IND",
       *     "dob": "1990-08-31",
       *     "permanent_zip": "231001",
       *     "gender": "Male",
       *     "license_number": "UP20 20150000000",
       *     "name": "MUNNA BHAIYA",
       *     "state": "UP",
       *     "ola_name": "DISTRICT TRANSPORT OFFICE, MIRZAPUR",
       *     "ola_code": "UP20"
       *   },
       *   "status_code": 200,
       *   "message": "",
       *   "success": true
       * }
       */

      console.dir(res.data, { depth: null })
      return {
        data: {
          temporaryAddress: res.data?.data?.temporary_address,
          fatherOrHusbandName: res.data?.data?.father_or_husband_name,
          licenseExpiryDate: res.data?.data?.doe,
          temporaryZip: res.data?.data?.temporary_zip,
          permanentAddress: res.data?.data?.permanent_address,
          licenseIssueDate: res.data?.data?.doi,
          clientId: res.data?.data?.client_id,
          citizenship: res.data?.data?.citizenship,
          dateOfBirth: res.data?.data?.dob,
          permanentZip: res.data?.data?.permanent_zip,
          gender: res.data?.data?.gender,
          licenseNumber: res.data?.data?.license_number,
          name: res.data?.data?.name,
          state: res.data?.data?.state,
          olaName: res.data?.data?.ola_name,
          olaCode: res.data?.data?.ola_code
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
