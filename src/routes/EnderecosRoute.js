import enderecosController from "../controllers/enderecosController";

export default (app) => {
    app.get('/enderecos', enderecosController.get);
    app.get('/enderecos/:id', enderecosController.get);
    app.post('/enderecos', enderecosController.create);
    app.patch('/enderecos/:id', enderecosController.update);
    app.delete('/enderecos/:id', enderecosController.destroy);
};