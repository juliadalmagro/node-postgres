import ExamesLaboratorio from '../models/ExamesLaboratorio';
import Medicacoes from '../models/Medicacoes';

const get = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id) {
            const response = await Medicacoes.findAll({
                order: [['id', 'asc']],
            });
            return res.status(200).send({
                message: 'Dados encontrados!',
                response,
            });
        }

        const response = await Medicacoes.findOne({
            where: {
                id,
            },
        });

        return res.status(200).send({
            message: 'Dados encontrados!',
            response,
        });

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        });
    }
};

const create = async (req, res) => {
    try {
        const { nomeMedicamento, dosagem, instrucoes, idDiagnosticos } = req.body;
        
        const response = await Medicacoes.create(
            {
                nomeMedicamento, 
                dosagem, 
                instrucoes, 
                idDiagnosticos
            },
        );
        return res.status(200).send({
            message: 'Dados encontrados!',
            response,
        })

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
        if(!id){
            return res.status(400).send({
                message: 'Id não informado!',
                response: [],
            });
        }

        const response = await Medicacoes.findOne({
            where: {
                id,
            },
        });

        if (!response) {
            return res.status(400).send({
                message: 'Id não encontrado na base!',
                response: [],
            });
        }

        Object.keys(req.body).forEach((chave) => {
            console.log(response[chave]);
            response[chave] = req.body[chave];
            
        });
        await response.save();

        return res.status(201).send({
            message: 'Dados atualizados!',
            response,
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
        
        if(!id){
            return res.status(400).send({
                message: 'Id não informado!',
                response: [],
            });
        }

        const response = await Medicacoes.findOne({
            where: {
                id,
            },
        });

        if (!response) {
            return res.status(400).send({
                message: 'Id não encontrado na base!',
                response: [],
            });
        }

        await response.destroy();

        return res.status(200).send({
            message: 'Dados destruidos!',
            response,
        })

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        });
    }
};

export default {
    get,
    create, 
    update, 
    destroy,
};