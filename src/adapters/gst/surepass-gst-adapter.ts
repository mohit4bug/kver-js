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
      const res = await this.axiosClient.post('/corporate-otp/gstin/init', {
        id_number: params.gstNumber
      })

      /**
       * @example
       * {
       *   "data": {
       *     "client_id": "gst_otp_fedWdafvBBpblZTofJaw",
       *     "email": "RIL.MHG@ril.com",
       *     "mobile": "9900012345",
       *     "fallback": false,
       *     "details": {
       *       "contact_details": {
       *         "principal": {
       *           "address": "Thane Belapur Road, Ghansoli, Navi Mumbai, Thane, Maharashtra, 400701",
       *           "email": "RIL.MHG@ril.com",
       *           "mobile": "9900012345",
       *           "nature_of_business": "Factory / Manufacturing, Retail Business, Input Service Distributor (ISD), Bonded Warehouse, SEZ, Works Contract, Warehouse / Depot, Service Provision, Leasing Business, Office / Sale Office, Recipient of Goods or Services, Wholesale Business, EOU / STP / EHTP"
       *         },
       *         "additional": [
       *           {
       *             "address": "IV, MAKER CHAMBERS, NARIMAN POINT, MUMBAI, Mumbai, Maharashtra, 400021",
       *             "email": "RIL.MHG@ril.com",
       *             "mobile": "9900012345",
       *             "nature_of_business": "Factory / Manufacturing, Retail Business, Input Service Distributor (ISD), Bonded Warehouse, SEZ, Works Contract, Warehouse / Depot, Service Provision, Leasing Business, Office / Sale Office, Recipient of Goods or Services, Wholesale Business, EOU / STP / EHTP"
       *           },
       *           {
       *             "address": "CHEMICAL TERMINAL BOMBAY LTD, PIRPAU INSTALLATION, NEAR BPT PUMP HOUSE, TROMBE, Mumbai, Maharashtra, 400074",
       *             "email": "RIL.MHG@ril.com",
       *             "mobile": "9900012345",
       *             "nature_of_business": "Factory / Manufacturing, Retail Business, Input Service Distributor (ISD), Bonded Warehouse, SEZ, Works Contract, Warehouse / Depot, Service Provision, Leasing Business, Office / Sale Office, Recipient of Goods or Services, Wholesale Business, EOU / STP / EHTP"
       *           }
       *         ]
       *       },
       *       "promoters": [
       *         "Nikhil Rasiklal Meswani ",
       *         "Hital Rasiklal Meswani ",
       *         "Mukesh Dhirubhai Ambani ",
       *         "Madhusudana Sivaprasad Panda "
       *       ],
       *       "annual_turnover": "Slab: Rs. 500 Cr. and above",
       *       "annual_turnover_fy": "2022-2023",
       *       "percentage_in_cash_fy": "",
       *       "percentage_in_cash": "NA",
       *       "aadhaar_validation": "Yes",
       *       "aadhaar_validation_date": "2024-02-28",
       *       "address_details": {},
       *       "liability_percentage_details": {},
       *       "less_info": false,
       *       "client_id": null,
       *       "gstin": "27AAACR1234K1Z7",
       *       "pan_number": "AAACR1234K",
       *       "business_name": "RELIANCE INDUSTRIES LIMITED",
       *       "legal_name": "RELIANCE INDUSTRIES LIMITED",
       *       "center_jurisdiction": "Commissionerate - BELAPUR,Division - DIVISION IV,Range - RANGE-IV (Jurisdictional Office)",
       *       "state_jurisdiction": "State - Maharashtra,Zone - Thane,Division - RAIGAD,Charge - URAN_701",
       *       "date_of_registration": "2017-07-01",
       *       "constitution_of_business": "Public Limited Company",
       *       "taxpayer_type": "Regular",
       *       "gstin_status": "Active",
       *       "date_of_cancellation": "1800-01-01",
       *       "field_visit_conducted": "No",
       *       "nature_bus_activities": [
       *         "Factory / Manufacturing",
       *         "Retail Business",
       *         "Input Service Distributor (ISD)",
       *         "Bonded Warehouse",
       *         "SEZ",
       *         "Works Contract",
       *         "Warehouse / Depot",
       *         "Service Provision",
       *         "Leasing Business",
       *         "Office / Sale Office",
       *         "Recipient of Goods or Services",
       *         "Wholesale Business",
       *         "EOU / STP / EHTP",
       *         "Supplier of Services",
       *         "Others",
       *         "Export"
       *       ],
       *       "nature_of_core_business_activity_code": "MFT",
       *       "nature_of_core_business_activity_description": "Manufacturer",
       *       "filing_status": [],
       *       "address": null,
       *       "hsn_info": {},
       *       "filing_frequency": []
       *     }
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
          email: res.data?.data?.email,
          mobile: res.data?.data?.mobile,
          fallback: res.data?.data?.fallback,
          details: {
            contactDetails: {
              principal: {
                address:
                  res.data?.data?.details?.contact_details?.principal?.address,
                email:
                  res.data?.data?.details?.contact_details?.principal?.email,
                mobile:
                  res.data?.data?.details?.contact_details?.principal?.mobile,
                natureOfBusiness:
                  res.data?.data?.details?.contact_details?.principal
                    ?.nature_of_business
              },
              additional:
                res.data?.data?.details?.contact_details?.additional?.map(
                  (item: any) => ({
                    address: item?.address,
                    email: item?.email,
                    mobile: item?.mobile,
                    natureOfBusiness: item?.nature_of_business
                  })
                ) || []
            },
            promoters: res.data?.data?.details?.promoters || [],
            annualTurnover: res.data?.data?.details?.annual_turnover,
            annualTurnoverFy: res.data?.data?.details?.annual_turnover_fy,
            percentageInCashFy: res.data?.data?.details?.percentage_in_cash_fy,
            percentageInCash: res.data?.data?.details?.percentage_in_cash,
            aadhaarValidation: res.data?.data?.details?.aadhaar_validation,
            aadhaarValidationDate:
              res.data?.data?.details?.aadhaar_validation_date,
            addressDetails: res.data?.data?.details?.address_details || {},
            liabilityPercentageDetails:
              res.data?.data?.details?.liability_percentage_details || {},
            lessInfo: res.data?.data?.details?.less_info,
            clientId: res.data?.data?.details?.client_id,
            gstin: res.data?.data?.details?.gstin,
            panNumber: res.data?.data?.details?.pan_number,
            businessName: res.data?.data?.details?.business_name,
            legalName: res.data?.data?.details?.legal_name,
            centerJurisdiction: res.data?.data?.details?.center_jurisdiction,
            stateJurisdiction: res.data?.data?.details?.state_jurisdiction,
            dateOfRegistration: res.data?.data?.details?.date_of_registration,
            constitutionOfBusiness:
              res.data?.data?.details?.constitution_of_business,
            taxpayerType: res.data?.data?.details?.taxpayer_type,
            gstinStatus: res.data?.data?.details?.gstin_status,
            dateOfCancellation: res.data?.data?.details?.date_of_cancellation,
            fieldVisitConducted: res.data?.data?.details?.field_visit_conducted,
            natureBusActivities:
              res.data?.data?.details?.nature_bus_activities || [],
            natureOfCoreBusinessActivityCode:
              res.data?.data?.details?.nature_of_core_business_activity_code,
            natureOfCoreBusinessActivityDescription:
              res.data?.data?.details
                ?.nature_of_core_business_activity_description,
            filingStatus: res.data?.data?.details?.filing_status || [],
            address: res.data?.data?.details?.address,
            hsnInfo: res.data?.data?.details?.hsn_info || {},
            filingFrequency: res.data?.data?.details?.filing_frequency || []
          }
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  }
}
