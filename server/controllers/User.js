import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import { promisify } from "util";

export async function validate(req, res, next){

    const { authorization } = req.headers;

    console.log(req.headers)


    if(!authorization){
        return res.sendStatus(401);
    }

    const [, token] = authorization.split(' ');

    try{
        await promisify(jwt.verify)(token, 'PRIVATEKEY');

        return next();
    }catch(err){
        return res.sendStatus(401)
    }
}


export const getAllUsers = async (req, res) => {
    
    try{
        const users = await User.findAll()
        res.json(users)
    }catch(err){
        res.json({message: err.message})
    }

}

export const getUserByAccount= async (req, res) => {
    
    try{
        const user = await User.findAll({
            where: {
                email_user: req.body.email_user,
                password_user: req.body.password_user
            }
        });

        const infoUser = {
            user: user[0],
            token: jwt.sign(user[0].toJSON(), 'PRIVATEKEY',{
                expiresIn: 86400
            })
        }

        res.json(infoUser)

    }catch(err){
        res.json({message: err.message})
    }

}

export const updateUser = async (req, res) => {
    
    try{
       await User.update(req.body,{
        where: {
            cd_user: req.params.code
        }
       });
       res.json({
           "message": "User updated"
       });
    }catch(err){
        res.json({message: err.message})
    }

}


export const createUser = async (req, res) => {
    
    try{
       await User.create(req.body);
       res.json({
           "message": "User created"
       });
    }catch(err){
        res.json({message: err.message})
    }

}

export const deleteUser = async (req, res) => {
    
    try{
        await User.destroy({
         where: {
             cd_user: req.params.code
         }
        });
        res.json({
            "message": "User deleted"
        });
     }catch(err){
         res.json({message: err.message})
     }

}

