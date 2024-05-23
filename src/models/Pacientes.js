import { DataTypes } from "sequelize";
import { sequelize } from "../config"

const Pacientes = sequelize.define(
    'pacientes',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        dataNascimento: {
            field: 'data_nascimento',
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(14),
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

export default Pacientes;