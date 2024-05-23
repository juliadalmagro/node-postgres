import examesLaboratorioController from "../controllers/examesLaboratorioController";

export default (app) => {
    app.get('/exames-laboratorio', examesLaboratorioController.get);
    app.get('/exames-laboratorio/:id', examesLaboratorioController.get);
    app.post('/exames-laboratorio', examesLaboratorioController.create);
    app.patch('/exames-laboratorio/:id', examesLaboratorioController.update);
    app.delete('/exames-laboratorio/:id', examesLaboratorioController.destroy);
};