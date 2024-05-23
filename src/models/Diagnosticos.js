import { DataTypes } from "sequelize";
import { sequelize } from "../config"
import Pacientes from "./Pacientes";

const Diagnosticos = sequelize.define(
    'diagnosticos',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        condicaoMedica: {
            field: 'condicao_medica',
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        data: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

Diagnosticos.belongsTo(Pacientes, {
    as: 'pacientes',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_pacientes',
        name: 'idPacientes',
        allowNull: false,
    }
});

export default Diagnosticos;