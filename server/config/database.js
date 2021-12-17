import { Sequelize } from 'sequelize';

const db = new Sequelize('db_crudnode', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
});

export default db;
