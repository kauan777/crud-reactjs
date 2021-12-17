import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const User = db.define('tbl_users', {

    cd_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_user: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    func_user: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    photo_user: {
        type: DataTypes.STRING(200),
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

export default User;