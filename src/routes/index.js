import PacientesRoute from "./PacientesRoute";
import EnderecosRoute from "./EnderecosRoute";
import DiagnosticosRoute from "./DiagnosticosRoute";
import ExamesLaboratorioRoute from "./ExamesLaboratorioRoute";
import MedicacoesRoute from "./MedicacoesRoute";


function Routes(app){
PacientesRoute(app),
EnderecosRoute(app),
DiagnosticosRoute(app),
ExamesLaboratorioRoute(app),
MedicacoesRoute(app)
}

export default Routes;