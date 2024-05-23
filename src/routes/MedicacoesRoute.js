import medicacoesController from "../controllers/medicacoesController";

export default (app) => {
    app.get('/medicacoes', medicacoesController.get);
    app.get('/medicacoes/:id', medicacoesController.get);
    app.post('/medicacoes', medicacoesController.create);
    app.patch('/medicacoes/:id', medicacoesController.update);
    app.delete('/medicacoes/:id', medicacoesController.destroy);
};