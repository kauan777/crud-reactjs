import { Sequelize } from 'sequelize';

const db = new Sequelize('db_crudnode', 'root', 'kauansql2727#',{
    dialect: 'mysql',
    host: 'localhost'
});

export default db;