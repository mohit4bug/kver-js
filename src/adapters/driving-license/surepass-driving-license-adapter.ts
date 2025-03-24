import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseDrivingLicenseAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassDrivingLicenseAdapterConfig {
  bearerToken: string
}

export class SurepassDrivingLicenseAdapter
  implements BaseDrivingLicenseAdapter
{
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassDrivingLicenseAdapterConfig) {
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
       *     "client_id": "license_iDdklSZIkxXfDrhVupRZ",
       *     "license_number": "TS02620190003657",
       *     "state": "Uttar Pradesh",
       *     "name": "MUNNA BHAIYA",
       *     "permanent_address": "TRIPATHI HAVELI, MIRZAPUR, UTTAR PRADESH",
       *     "permanent_zip": "",
       *     "temporary_address": "TRIPATHI HAVELI, MIRZAPUR, UTTAR PRADESH",
       *     "temporary_zip": "",
       *     "citizenship": "",
       *     "ola_name": "RTA MAHABUBABAD",
       *     "ola_code": "TS026",
       *     "gender": "M",
       *     "father_or_husband_name": "KALEEN BHAIYA",
       *     "dob": "1998-06-15",
       *     "doe": "2039-07-23",
       *     "transport_doe": "1800-01-01",
       *     "doi": "2019-07-24",
       *     "transport_doi": "1800-01-01",
       *     "profile_image": "base64Image",
       *     "has_image": true,
       *     "blood_group": "",
       *     "vehicle_classes": [
       *       "MCWG",
       *       "LMV-NT"
       *     ],
       *     "less_info": false
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
          licenseNumber: res.data?.data?.license_number,
          state: res.data?.data?.state,
          name: res.data?.data?.name,
          permanentAddress: res.data?.data?.permanent_address,
          permanentZip: res.data?.data?.permanent_zip,
          temporaryAddress: res.data?.data?.temporary_address,
          temporaryZip: res.data?.data?.temporary_zip,
          citizenship: res.data?.data?.citizenship,
          olaName: res.data?.data?.ola_name,
          olaCode: res.data?.data?.ola_code,
          gender: res.data?.data?.gender,
          fatherOrHusbandName: res.data?.data?.father_or_husband_name,
          dob: res.data?.data?.dob,
          doe: res.data?.data?.doe,
          transportDoe: res.data?.data?.transport_doe,
          doi: res.data?.data?.doi,
          transportDoi: res.data?.data?.transport_doi,
          profileImage: res.data?.data?.profile_image,
          hasImage: res.data?.data?.has_image,
          bloodGroup: res.data?.data?.blood_group,
          vehicleClasses: res.data?.data?.vehicle_classes,
          lessInfo: res.data?.data?.less_info
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
