import { DataTypes } from "sequelize";
import { sequelize } from "../config"
import Diagnosticos from "./Diagnosticos";

const Medicacoes = sequelize.define(
    'medicacoes',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nomeMedicamento: {
            field: 'nome_medicamento',
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dosagem: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        instrucoes: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

Medicacoes.belongsTo(Diagnosticos, {
    as: 'diagnosticos',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_diagnosticos',
        name: 'idDiagnosticos',
        allowNull: false,
    }
});

export default Medicacoes;