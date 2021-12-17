import express from 'express'

import { 
    getAllUsers, 
    createUser, 
    updateUser, 
    deleteUser,
    getUserById
} from '../controllers/User.js';

const router = express.Router()


router.get('/', getAllUsers ); // CONSULTA DE TODOS
router.get('/:code', getUserById ); // CONSULTA DE UM USUARIO
router.post('/', createUser ); // CRIAR USUARIO
router.patch('/:code', updateUser ); // ATUALIZAR UM USUARIO
router.delete('/:code', deleteUser ); // DELETAR UM USUARIO

export default router;