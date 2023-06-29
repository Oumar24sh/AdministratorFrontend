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
} from "../../api";

const BASE_URL = "http://localhost:3001";
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
};

export type ApiClient = typeof api;
