import axios, { AxiosError, type AxiosInstance } from 'axios'
import type { BaseGstAdapter } from './interface'
import type { IVerifyParams, IVerifyResponse } from './types'

interface ISurepassGstAdapterConfig {
  bearerToken: string
}

export class SurepassGstAdapter implements BaseGstAdapter {
  private axiosClient: AxiosInstance
  private BASE_URL = 'https://kyc-api.surepass.io/api/v1'

  constructor(private config: ISurepassGstAdapterConfig) {
    this.axiosClient = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: 'Bearer ' + this.config.bearerToken
      }
    })
  }

  verify = async (params: IVerifyParams): Promise<IVerifyResponse> => {
    try {
      const res = await this.axiosClient.post('/corporate/gstin', {
        id_number: params.gstNumber
      })

      /**
       * @example
       * {
       *   "data": {
       *     "address_details": {},
       *     "client_id": "corporate_gstin_hemuprVyNGvtQAvRJHXy",
       *     "gstin": "08AKWPJ1234H1ZN",
       *     "pan_number": "AKWPJ1234H",
       *     "business_name": "MINDA MARWAR PRODUCER COMPANY",
       *     "legal_name": "MADAN LAL JAT",
       *     "center_jurisdiction": "Commissionerate - JODHPUR,Division - GST DIVISION",
       *     "state_jurisdiction": "State - Rajasthan,Zone",
       *     "date_of_registration": "2021-10-20",
       *     "constitution_of_business": "Proprietorship",
       *     "taxpayer_type": "Regular",
       *     "gstin_status": "Active",
       *     "date_of_cancellation": "1800-01-01",
       *     "field_visit_conducted": "No",
       *     "nature_bus_activities": [
       *       "Retail Business",
       *       "Wholesale Business"
       *     ],
       *     "nature_of_core_business_activity_code": "NA",
       *     "nature_of_core_business_activity_description": "NA",
       *     "aadhaar_validation": "Yes",
       *     "aadhaar_validation_date": "2021-10-20",
       *     "filing_status": [],
       *     "address": "MINDA NAVA, WARD NO. 15, VILL. BHEEVPURA",
       *     "hsn_info": {},
       *     "filing_frequency": []
       *   },
       *   "status_code": 200,
       *   "success": true,
       *   "message": null,
       *   "message_code": "success"
       * }
       */
      return {
        data: {
          addressDetails: res.data?.data?.address_details || {},
          clientId: res.data?.data?.client_id,
          gstin: res.data?.data?.gstin,
          panNumber: res.data?.data?.pan_number,
          businessName: res.data?.data?.business_name,
          legalName: res.data?.data?.legal_name,
          centerJurisdiction: res.data?.data?.center_jurisdiction,
          stateJurisdiction: res.data?.data?.state_jurisdiction,
          dateOfRegistration: res.data?.data?.date_of_registration,
          constitutionOfBusiness: res.data?.data?.constitution_of_business,
          taxpayerType: res.data?.data?.taxpayer_type,
          gstinStatus: res.data?.data?.gstin_status,
          dateOfCancellation: res.data?.data?.date_of_cancellation,
          fieldVisitConducted: res.data?.data?.field_visit_conducted,
          natureBusActivities: res.data?.data?.nature_bus_activities || [],
          natureOfCoreBusinessActivityCode:
            res.data?.data?.nature_of_core_business_activity_code,
          natureOfCoreBusinessActivityDescription:
            res.data?.data?.nature_of_core_business_activity_description,
          aadhaarValidation: res.data?.data?.aadhaar_validation,
          aadhaarValidationDate: res.data?.data?.aadhaar_validation_date,
          filingStatus: res.data?.data?.filing_status || [],
          address: res.data?.data?.address,
          hsnInfo: res.data?.data?.hsn_info || {},
          filingFrequency: res.data?.data?.filing_frequency || []
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
