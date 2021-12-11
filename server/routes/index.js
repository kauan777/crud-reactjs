import express from 'express'

import { 
    getAllUsers, 
    createUser, 
    updateUser, 
    deleteUser
} from '../controllers/User.js';

const router = express.Router()


router.get('/', getAllUsers ); // CONSULTA DE TODOS
router.post('/', createUser ); // CRIAR USUARIO
router.patch('/:code', updateUser ); // ATUALIZAR UM USUARIO
router.delete('/:code', deleteUser ); // DELETAR UM USUARIO

export default router;