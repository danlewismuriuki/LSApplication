import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../db/db';

class Customer extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Customer.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
    sequelize,
    tableName: 'customer'
}
);

export default Customer;