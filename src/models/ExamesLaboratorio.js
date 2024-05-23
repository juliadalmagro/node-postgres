import { DataTypes } from "sequelize";
import { sequelize } from "../config"
import Diagnosticos from "./Diagnosticos";

const ExamesLaboratorio = sequelize.define(
    'exames_laboratorio',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        teste: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        valor: {
            type: DataTypes.STRING(15),
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

ExamesLaboratorio.belongsTo(Diagnosticos, {
    as: 'diagnosticos',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_diagnosticos',
        name: 'idDiagnosticos',
        allowNull: false,
    }
});

export default ExamesLaboratorio;