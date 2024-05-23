import pacientesController from "../controllers/pacientesController";

export default (app) => {
    app.get('/pacientes', pacientesController.get);
    app.get('/pacientes/:id', pacientesController.get);
    app.post('/pacientes', pacientesController.create);
    app.patch('/pacientes/:id', pacientesController.update);
    app.delete('/pacientes/:id', pacientesController.destroy);
};