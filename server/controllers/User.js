import User from "../models/userModel.js"



export const getAllUsers = async (req, res) => {
    
    try{
        const users = await User.findAll()
        res.json(users)
    }catch(err){
        res.json({message: err.message})
    }

}

export const getUserById = async (req, res) => {
    
    try{
        const user = await User.findAll({
            where: {
                cd_user: req.params.code,
            }
        });

        res.json(user[0])

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

