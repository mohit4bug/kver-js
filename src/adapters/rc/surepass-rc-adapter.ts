import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseRcAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassRcAdapterConfig {
  bearerToken: string
}

export class SurepassRcAdapter implements BaseRcAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassRcAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post('/rc/rc-full', {
        id_number: params.rcNumber
      })

      /**
       * @example
       * {
       *   "data": {
       *     "client_id": "rc_dSpdBzqCodglkkoQkmeu",
       *     "rc_number": "AB12CD3456",
       *     "registration_date": "2017-09-05",
       *     "owner_name": "Munna Bhaiya",
       *     "father_name": "Kaleen Bhaiya",
       *     "present_address": "HNO 1-10/2 Mirzapur",
       *     "permanent_address": "HNO 1-10/2 Mirzapur",
       *     "mobile_number": "",
       *     "vehicle_category": "HPV",
       *     "vehicle_chasi_number": "ABCD12LRT0HH123456",
       *     "vehicle_engine_number": "ABCD12H123456",
       *     "maker_description": "VEHICLES LTD",
       *     "maker_model": "EICHER PRO BSIV",
       *     "body_type": "SALOON",
       *     "fuel_type": "DIESEL",
       *     "color": "WHITE",
       *     "norms_type": "BHARAT STAGE IV",
       *     "fit_up_to": "2099-09-00",
       *     "financer": "FINANCE LTD",
       *     "financed": true,
       *     "insurance_company": "Assurance Company Limited",
       *     "insurance_policy_number": "0000023123456789",
       *     "insurance_upto": "2099-00-04",
       *     "manufacturing_date": "8/1947",
       *     "manufacturing_date_formatted": "1947-08",
       *     "registered_at": "RTO",
       *     "latest_by": "1497-00-27",
       *     "less_info": true,
       *     "tax_upto": null,
       *     "tax_paid_upto": "1857-11-30",
       *     "cubic_capacity": "3298",
       *     "vehicle_gross_weight": "9850",
       *     "no_cylinders": "4",
       *     "seat_capacity": "50",
       *     "sleeper_capacity": null,
       *     "standing_capacity": null,
       *     "wheelbase": "5260",
       *     "unladen_weight": "6110",
       *     "vehicle_category_description": "Bus",
       *     "pucc_number": "",
       *     "pucc_upto": null,
       *     "permit_number": "123/AB/45/64",
       *     "permit_issue_date": null,
       *     "permit_valid_from": null,
       *     "permit_valid_upto": "2080-11-06",
       *     "permit_type": "TEMPORARY PERMIT",
       *     "national_permit_number": null,
       *     "national_permit_upto": null,
       *     "national_permit_issued_by": null,
       *     "non_use_status": null,
       *     "non_use_from": null,
       *     "non_use_to": null,
       *     "blacklist_status": null,
       *     "noc_details": null,
       *     "owner_number": "1",
       *     "rc_status": null,
       *     "masked_name": false,
       *     "challan_details": null,
       *     "variant": null
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
          rcNumber: res.data?.data?.rc_number,
          registrationDate: res.data?.data?.registration_date,
          ownerName: res.data?.data?.owner_name,
          fatherName: res.data?.data?.father_name,
          presentAddress: res.data?.data?.present_address,
          permanentAddress: res.data?.data?.permanent_address,
          mobileNumber: res.data?.data?.mobile_number,
          vehicleCategory: res.data?.data?.vehicle_category,
          vehicleChasiNumber: res.data?.data?.vehicle_chasi_number,
          vehicleEngineNumber: res.data?.data?.vehicle_engine_number,
          makerDescription: res.data?.data?.maker_description,
          makerModel: res.data?.data?.maker_model,
          bodyType: res.data?.data?.body_type,
          fuelType: res.data?.data?.fuel_type,
          color: res.data?.data?.color,
          normsType: res.data?.data?.norms_type,
          fitUpTo: res.data?.data?.fit_up_to,
          financer: res.data?.data?.financer,
          financed: res.data?.data?.financed,
          insuranceCompany: res.data?.data?.insurance_company,
          insurancePolicyNumber: res.data?.data?.insurance_policy_number,
          insuranceUpto: res.data?.data?.insurance_upto,
          manufacturingDate: res.data?.data?.manufacturing_date,
          manufacturingDateFormatted:
            res.data?.data?.manufacturing_date_formatted,
          registeredAt: res.data?.data?.registered_at,
          latestBy: res.data?.data?.latest_by,
          lessInfo: res.data?.data?.less_info,
          taxUpto: res.data?.data?.tax_upto,
          taxPaidUpto: res.data?.data?.tax_paid_upto,
          cubicCapacity: res.data?.data?.cubic_capacity,
          vehicleGrossWeight: res.data?.data?.vehicle_gross_weight,
          noCylinders: res.data?.data?.no_cylinders,
          seatCapacity: res.data?.data?.seat_capacity,
          sleeperCapacity: res.data?.data?.sleeper_capacity,
          standingCapacity: res.data?.data?.standing_capacity,
          wheelbase: res.data?.data?.wheelbase,
          unladenWeight: res.data?.data?.unladen_weight,
          vehicleCategoryDescription:
            res.data?.data?.vehicle_category_description,
          puccNumber: res.data?.data?.pucc_number,
          puccUpto: res.data?.data?.pucc_upto,
          permitNumber: res.data?.data?.permit_number,
          permitIssueDate: res.data?.data?.permit_issue_date,
          permitValidFrom: res.data?.data?.permit_valid_from,
          permitValidUpto: res.data?.data?.permit_valid_upto,
          permitType: res.data?.data?.permit_type,
          nationalPermitNumber: res.data?.data?.national_permit_number,
          nationalPermitUpto: res.data?.data?.national_permit_upto,
          nationalPermitIssuedBy: res.data?.data?.national_permit_issued_by,
          nonUseStatus: res.data?.data?.non_use_status,
          nonUseFrom: res.data?.data?.non_use_from,
          nonUseTo: res.data?.data?.non_use_to,
          blacklistStatus: res.data?.data?.blacklist_status,
          nocDetails: res.data?.data?.noc_details,
          ownerNumber: res.data?.data?.owner_number,
          rcStatus: res.data?.data?.rc_status,
          maskedName: res.data?.data?.masked_name,
          challanDetails: res.data?.data?.challan_details,
          variant: res.data?.data?.variant
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
