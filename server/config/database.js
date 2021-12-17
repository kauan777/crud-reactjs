import { Sequelize } from 'sequelize';

const db = new Sequelize('db_crudnode', 'root', 'YOUR PASSWOD',{
    dialect: 'mysql',
    host: 'localhost'
});

export default db;
