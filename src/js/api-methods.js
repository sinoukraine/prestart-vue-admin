const DOMAIN1 = "https://api.m2mglobaltech.com/";
const DOMAIN2 = "https://helper.quiktrak.com.au/";
const DOMAIN3 = "https://test4.m2mdata.co/";
const DOMAIN4 = "https://nominatim.sinopacific.com.ua/";

export default {
  DOMAIN1,

  GET_USER_INFO: DOMAIN1 + 'QuikTrak/V1/User/GetUserInfo',
  GET_DASHBOARD: DOMAIN1 + 'Quiktrak/v1/Report/Dashboard',
  GET_USAGE_OVERVIEW: DOMAIN1 + 'Quiktrak/v1/Report/UsageOverview',
  GET_TOP_USAGE: DOMAIN1 + 'Quiktrak/v1/Report/TopUsage2',


  CREATE_CREDITS_PAYMENT: DOMAIN2 + 'stripe/dashboard-credit-recharge/create.php',
  ADD_CREDITS: DOMAIN2 + 'stripe/dashboard-credit-recharge/add-credits.php',
  CREDITS_TRANSFER: DOMAIN1 + 'Quiktrak/V1/Credits/Transfer',
  CREDITS_TRANSFER_HISTORY: DOMAIN1 + 'Quiktrak/V1/Credits/History',

  QUERY_CUSTOMERS: DOMAIN1 + 'Quiktrak/V1/User/QueryAcccount',

  GET_ASSET_LOCATION: DOMAIN1 + 'Installer/V1/Client/LivePostion',
  GET_ADDRESS_BY_COORDS: DOMAIN4 + 'reverse',
  //GET_SMS_HISTORY: DOMAIN1 + 'Installer/V1/Client/GetCommandHisMessages',
  GET_SMS_HISTORY: DOMAIN3 + 'JT/SMS/History',
  SIM_GET_SERVICE_PROFILE_OPTIONS: DOMAIN3 + 'JT/ServiceProfile/Query',
  SIM_SET_SERVICE_PROFILE: DOMAIN3 + 'JT/Sim/SetSimServiceProfile',
  SIM_SET_ACTIVATE: DOMAIN3 + 'JT/Sim/Activate',
  SIM_SET_SUSPEND: DOMAIN3 + 'JT/Sim/Suspend',
  SIM_SET_RESUME: DOMAIN3 + 'JT/Sim/Resume',
  SIM_SET_TERMINATE: DOMAIN3 + 'JT/Sim/Terminate',
  SIM_REPLACE: DOMAIN1 + 'Common/V1/Activation/ReplaceSim',
  SIM_SEND_COMMAND: DOMAIN1 + 'QuikData/V1/Command/SendByType',
  SIM_GET_COMMANDS: DOMAIN1 + 'QuikData/V1/Command/GetCommandTypeList4Clients',
}

//https://api.m2mglobaltech.com/QuikData/V1/Command/SendByType
