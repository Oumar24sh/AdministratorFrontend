import {
  Configuration,
  ConfigurationParameters,
  PlotApi,
  AuthenticationApi,
  CommonSpaceApi,
  PlotStatusApi,
  ExpensesApi,
  SummaryApi,
  UserApi,
  AuditApi,
  DashboardApi,
  ChangeRequestApi,
  CopropertyApi,
  ApproverApi,
  RoleApi

} from "../../api";

const BASE_URL = "http://100.121.27.94:8001";
const configParams: ConfigurationParameters = {
  basePath: BASE_URL,
  // middleware: [],
};
const apiConfig = new Configuration(configParams);
export const api = {
  plot: new PlotApi(apiConfig),
  auth: new AuthenticationApi(apiConfig),
  commonSpace: new CommonSpaceApi(apiConfig),
  expenses: new ExpensesApi(apiConfig),
  summary: new SummaryApi(apiConfig),
  user: new UserApi(apiConfig),
  audit: new AuditApi(apiConfig),
  dashboard: new DashboardApi(apiConfig),
  changeRequest: new ChangeRequestApi(apiConfig),
  coproperty: new CopropertyApi(apiConfig),
  approver: new ApproverApi(apiConfig),
  plotStatus: new PlotStatusApi(apiConfig),
  role: new RoleApi(apiConfig),
};

export type ApiClient = typeof api;
