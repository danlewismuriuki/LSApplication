// Project(name, description)
import { DataTypes, Model } from "sequelize";
import sequelize from '../db/db';

class Project extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT, // Use TEXT for longer descriptions
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'projects',
        timestamps: true,
    }
);

export default Project;