import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseVoterIdAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassVoterIdAdapterConfig {
  bearerToken: string
}

export class SurepassVoterIdAdapter implements BaseVoterIdAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassVoterIdAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post('/voter-id/voter-id', {
        id_number: params.voterIdNumber
      })

      /**
       * @example
       * {
       *   "data": {
       *     "client_id": "voter_hvTAjyKoGlubpyDctMMT",
       *     "input_voter_id": "TRY1234567",
       *     "epic_no": "TRY1234567",
       *     "gender": "M",
       *     "state": "Rajasthan",
       *     "name": "VISHAL",
       *     "relation_name": "RAJENDRA",
       *     "relation_type": "FTHR",
       *     "house_no": null,
       *     "dob": null,
       *     "age": "22",
       *     "area": "ABCD",
       *     "district": "Dausa",
       *     "additional_check": [],
       *     "multiple": false,
       *     "last_update": null,
       *     "assembly_constituency": "XXXXX",
       *     "assembly_constituency_number": "00",
       *     "polling_station": "Government Upper Primary School",
       *     "part_number": "000",
       *     "part_name": "ABCD",
       *     "slno_inpart": "000",
       *     "ps_lat_long": "",
       *     "rln_name_v1": "राजेंद्र",
       *     "rln_name_v2": "",
       *     "rln_name_v3": "",
       *     "section_no": "2",
       *     "name_v1": "विशाल",
       *     "name_v2": "विशाल",
       *     "name_v3": "",
       *     "parliamentary_name": "ABCD",
       *     "parliamentary_number": "11",
       *     "st_code": "S20",
       *     "parliamentary_constituency": "Dausa",
       *     "id": "6940610_TRY1234567_S20"
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
          inputVoterId: res.data?.data?.input_voter_id,
          epicNo: res.data?.data?.epic_no,
          gender: res.data?.data?.gender,
          state: res.data?.data?.state,
          name: res.data?.data?.name,
          relationName: res.data?.data?.relation_name,
          relationType: res.data?.data?.relation_type,
          houseNo: res.data?.data?.house_no,
          dob: res.data?.data?.dob,
          age: res.data?.data?.age,
          area: res.data?.data?.area,
          district: res.data?.data?.district,
          additionalCheck: res.data?.data?.additional_check,
          multiple: res.data?.data?.multiple,
          lastUpdate: res.data?.data?.last_update,
          assemblyConstituency: res.data?.data?.assembly_constituency,
          assemblyConstituencyNumber:
            res.data?.data?.assembly_constituency_number,
          pollingStation: res.data?.data?.polling_station,
          partNumber: res.data?.data?.part_number,
          partName: res.data?.data?.part_name,
          slnoInPart: res.data?.data?.slno_inpart,
          psLatLong: res.data?.data?.ps_lat_long,
          rlnNameV1: res.data?.data?.rln_name_v1,
          rlnNameV2: res.data?.data?.rln_name_v2,
          rlnNameV3: res.data?.data?.rln_name_v3,
          sectionNo: res.data?.data?.section_no,
          nameV1: res.data?.data?.name_v1,
          nameV2: res.data?.data?.name_v2,
          nameV3: res.data?.data?.name_v3,
          parliamentaryName: res.data?.data?.parliamentary_name,
          parliamentaryNumber: res.data?.data?.parliamentary_number,
          stCode: res.data?.data?.st_code,
          parliamentaryConstituency: res.data?.data?.parliamentary_constituency,
          id: res.data?.data?.id
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
