import { DataTypes } from "sequelize";
import { sequelize } from "../config"
import Pacientes from "./Pacientes";

const Enderecos = sequelize.define(
    'enderecos',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        bairro: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rua: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING(14),
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

Enderecos.belongsTo(Pacientes, {
    as: 'pacientes',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_pacientes',
        name: 'idPacientes',
        allowNull: false,
    }
});

export default Enderecos;