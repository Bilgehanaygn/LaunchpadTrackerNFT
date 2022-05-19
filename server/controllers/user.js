import User from "../models/user.js";
import jwt from "jsonwebtoken";



export const login = async (req,res) => {    
    
    const { key: _key } = req.params;
    await User.findOne({key: _key}).then((data, error)=>{
        if(error){
            console.log(error);
            res.json(error);
        }
        else{
            if(data){
                //let jwtEnc = jwt.sign(_key, 'secretM');
                //console.log(jwtEnc);
                res.status(200).json({jwt: data.jwt, userId: data._id});
            }
            else{
                res.status(401).send({message:"User not found!"});
            }
            
        }
    })
}