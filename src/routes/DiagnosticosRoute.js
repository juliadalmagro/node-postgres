import diagnosticosController from "../controllers/diagnosticosController";

export default (app) => {
    app.get('/diagnosticos', diagnosticosController.get);
    app.get('/diagnosticos/:id', diagnosticosController.get);
    app.post('/diagnosticos', diagnosticosController.create);
    app.patch('/diagnosticos/:id', diagnosticosController.update);
    app.delete('/diagnosticos/:id', diagnosticosController.destroy);
};