
const Endpoints = {
    GET_LOGIN_CHECK_USER: "Registration_api/LoginCheckUser2",
    GET_LOGIN_PASSWORD: "LoginPassword",
    GET_REGISTRATION_OTP: "Registration_api/Validate_sendotp",
    GET_NEW_REGISTRATION_OTP: "Registration_api/Registration2",
    GET_VERIFY_REGISTRATION_OTP: "Registration_api/Registration_new",
    GET_LOGIN_OTP: 'LoginOtp',
    /// not working
    GET_API_LOG: "Getapilog",
    BANNER: "Getbannerlist",
    CITY_LIST: "Api_CityList?s_id:",
    VALIDATE_RECHARGE:
        "Recharge_apis/Validate_recharge/Validate_is_Pending?number:",
    GET_SERVICE_LIST: "Getcompany",
    GET_RECHARGESERVICE_LIST: "Rechargeservice_list",
    GET_OPERATORNAME_CIRCLE: "getPlan/getoperatorname_circle",
    GET_OPERATORNAME_CIRCLE_DTH:
        "GetPlan/getoperatorname_circledth",
    GET_RECHARGE: "Recharge",
    VALIDATE_RECHARGE_JIO: "Recharge_apis/Validate_recharge",
    GET_CUSTOMER_INFO: "GetCustomerName",
    GET_BILLER_PARAM: "Api_getBiller_Param",
    GET_REFERAL_LIST: "getUserlist",
    GET_REFERAL_CODE: "Referal",
    /// not working in live GET_ICICI_QR api
    GET_ICICI_QR: "GetIcici_qr",
    GET_ADD_SHOW: "Ad_show",
    GET_SUMMARY: "getSummary",
    GET_LIST: "getlist",
    GET_LEDGER_REPORT: "getLedgerReport",
    GET_COMPLAIN: "Complain",
    CHECK_OTP_DEACTIVE_VERIFACTION: "check_otp_to_deactive",
    CHECK_OTP_ACTIVE_VERIFACTION: "check_otp_to_active",

    /// not working in live 6 api
    GET_DMR_REPORTLIST: "GetDmrList/index",
    GET_DMR_CHECK_STATUS: "Dmr2_statuscheck",
    GET_DMR_VERIFY_OTP: "Dmr2_statuscheck/getRefund",
    GET_AEPS_REPORTLIST: "Aeps_ledger",
    GET_PAYOUT_REPORTLIST: "Payout_report2",
    GET_BOOKING_REPORTLIST: "Api_pecservice_OrderList",
    /// not working in live

    GET_TOPUP_REPORTLIST: "GetTopupReport",
    EMERGENCYHELPSUPPORT: "emergencyhelpsupport",
    /// not working in live GET_COMMISSION
    GET_COMMISSION: "V1/Mycommission2",

    GET_HELP_VIDEO: "Api_pecservice_Help_Vedio",
    /// not working in live INSTANTPAY_AEPS_ONBOARDING 2
    INSTANTPAY_AEPS_ONBOARDING: "Instantpay_Aeps_onboarding",
    INSTANTPAY_AEPS_ONBOARDING_VALIDATE: "Instantpay_Aeps_onboarding/validate",
    /// not working GET_BANK_LIST
    GET_BANK_LIST: "Getaepsbank",
    /// not working MOVE_TO_WALLET
    MOVE_TO_WALLET: "MoveToWallet",
    COMPLAIN_GETRECHARGELIST: "Complain/getRechargeList",
    COMPLAIN_GETCOMPLAINLIST: "Complain/getcomplainList",
    SHOP_USER_Add_ADDRESS: "Api_Shop_User_address",
    SHOP_USER_ADDRESS_LIST: "Api_Shop_User_Address_List",
    DELET_ACCOUNT: "Deative_user",
    SHOP_DELETE_ADDRESS: "Api_Shop_Delete_address",
    SHOP_ADDRESS_STATE_LIST: "Api_StateList",
    /// not working GET_UPDATEREGBANK
    GET_UPDATEREGBANK: "Updateregbank",
    /// not working GET_REG_ACCOUNT
    GET_REG_ACCOUNT: "Getregac",
    /// not working GET_PAY_OUT
    GET_PAY_OUT: "Getpayout",

    GET_SERVICE_RECHARGE: "DoBillrecharge",
    GET_BILL_AMOUNT: "getBillAmount",
    UPLOAD_ADHAR_PAN: "UploadAdharPan",
    UPLOAD_SELFI: "UploadSelfi",

    /// not working 4 api
    GET_AEPS_TEST_CASHWITHDRAWL: "aepstest2",
    GET_AEPS_TEST_CB_MS: "aepstest",
    GET_AEPS_OUTLET_LOGIN: "Aeps_outletLogin",
    GET_AEPS_OUTLET_CASHWITHDRAWAL_LOGIN: "Aeps_outletLogin_cash_withdrawal",


    GET_API_UPDATE_AVTAR: "Api_update_Avtar",
    GET_LIST_GET_LAST_LIST_TXNS: "Getlist/getlasttxns",
    GET_ADMIN_SETTING: "AdminSettings",


    /// not working 10 api
    GET_EKO_CHECKAEPS_STATUS: "Eko_onboarding/checkaepsstatus",
    GET_INSTANTPAY_OUTLETLOGIN_STATUS: "Instantpay_outletLoginStatus",
    GET_AEPS_CHARGES: "Aeps_activation",
    GET_DMR_SENDER_REGISTRATION: "Dmr2_sender_registration",
    GET_DMR_SENDER_OTP_VALIDATION: "Dmr2_sender_otpvalidation",
    DMR_GET_SENDER_INFO: "dmr2_getsenderinfo",
    DMR_GET_List: "getDmrList",
    DMR_DELETE_BEN: "dmr_deletebene",
    DMR_TRANSFER_BEN: "dmr2_transfer",
    GET_DMR_LIST_DETAIL: "GetDmrList/getDmtDetail",
    /// not working above 10 api

    AdminInfo: "Admininfo",


    /// not working 4 apis
    DMR_GET_BANK_LIST: "dmr2_getbanklist",
    DMR_GET_ACCOUNT_VALIDATION: "Dmr2_account_validation",
    DMR_GET_ADD_BENE: "Dmr2_addbene",
    DMR_GET_CHARGE: "Dmr2_charge_info",
    /// not working above 4 api

    GET_API_SHOP_SETPRIMARY_ADDRESS: "Api_Shop_SetPrimary_address",
    /// not working above 2 api
    TRENDING_Like_LIST: "tranding/Api_Trending/like",
    GET_API_REPORT_TRENDING: "Api_report_ternding",

    PINE_CALLBACK_STATUS: "temp/Pine_pull",


    PAYTM_CREDENTIALS_CHECK_STATUS: "PG/Paytm_statuscheck",
    REQUEST_LIMIT_QUEUE: "Api_req_limit_queue",
    GET_BUS_CITIES: "v2/get_cities",
    GET_BUS_TRIPS: "v2/get_trip",
    GET_BUS_TRIP_DETAILS: "v2/get_trip_details_layout",
    GET_BUS_BLOCK_TICKET: "v2/blockTicket",
    GET_BUS_BOOK_TICKET: "v2/bookticket",
    GET_BUS_TICKET: "v2/Get_ticket",
    GET_BUS_CANCEL_TICKET: "v2/cancel_ticket",
    GET_BUS_CANCELLATION_DATA: "v2/cancellation_data",
    GET_BUS_ALL_TICKET: "v2/Get_upcoming_trip",
    GET_BUS_ALL_REPORTS: "v2/Get_ticket_list",
    GET_SpotLight: "Spotlite",

    UPLOAD_PANCARD_IMAGE: "UploadPan",
    GET_BUY_PromoCode: "Paytm/BuyPromoCode",
    GET_MEMBERSHIP_REPORT_LIST: "Paytm/Paytm_report",
    GET_PAYTM_AVAIL_OFFER: "Paytm/Avail_Offer",
    GET_Membership_Offer_List: "Paytm/GetOffers",

    GET_AIRPORT_LIST: "tbo/flight/GetList",
    GET_CALENDAR_FARE: "tbo/flight/CalendarFare",
    GET_FLIGHT_LIST: "tbo/flight/Search",
    GET_FLIGHT_FARE_QUOTE: "tbo/flight/FareQuote",
    GET_FLIGHT_BOOKING_PAYMENT: "tbo/flight/Book",

    GETGIFTCARDOFFERS: "woohoo/Pine_Dash",

    // aa api kartik dholkiya e dynamic link mate banavi che
    GET_DYNAMIC_LINK: "firebase_redirect",
    // aa api kartik dholkiya Trending List  mate banavi che
    GETNEWTRENDING: "tranding/New_trending",
};

export default Endpoints;