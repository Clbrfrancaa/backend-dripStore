
const UserModel=require('../models/UserModel')
const validator = require('validator');


const UserCreateValidation = async (req,res,next)=>{
    try{
      
        

        const {FirstName, Surname, Email, Password}=req.body

        const EmailValid= await UserModel.findOne({where:{Email:Email}})

        if(EmailValid){
          res.send({
            message:'email ja cadastrado'
          })
        }

        if(Password.length <=4){
            return res.status(400).json({
                success:false,
                message:"senha deve conter mais de 4 caracteres"
            })
        }



        if(!FirstName || !Surname || !Email || !Password){
            const message="todos os campos devem ser preenchidos"
           return res.status(400).json({
                success:false,
                message:message
            })
        }

        if (!validator.isEmail(Email)) {
            return res.status(400).json({
                success:false,
                message:'email invalido'
            })
        }


next()
    }catch(error){
        return req.status(400).json({
            success:false,
            message:`Erro na requisição ${error}`
        })

    }
}




module.exports={
    UserCreateValidation,
    
}


































// const { HostNotReachableError } = require("sequelize")
// const userModel = require ('../models/UserModel')
// const { isEmail } = require('validator')


// const UserCreateValidation = async (req, res, next) => {
//     try {

//         const { firstname, surname, email, password } = req.body
//          if (!firstname || !surname || !email || !password) {
//              const message = 'firstname, surname, email e password são obrigatorios'
//              return res.status(400).json({
//                  sucess: false,
//                  message: message
//              })
//          }  
        
        
        
        
        
//         const emailValidation = await userModel.findOne({ where: { email } });
//         const passwordValidaton = await userModel.findOne({where: { password }})
//              if (emailValidation) {
//                  const message = 'Email já cadastrado'
//                  return res.status(400).json({
//                      success: false,
//                      message: message
//                  })
//              }

//              if (passwordValidaton) {
//                 const message = 'Senha já utilizada!'
//                 return res.status(400).json({
//                     success: false,
//                     message: message
//                 })
//             }



//              if(password.length <=8){
//                 return res.status(400).json({
//                     success:false,
//                     message:"senha deve conter mais de 8 caracteres"
//                 })
//             }

        
        

//             next()

//         } catch (error) {
//             return res.status(400).json({
//                 success: false,
//                 message: `Erro: ${error}`
//             })

//         }
//     }



// module.exports = { UserCreateValidation }


       




        // const requiredFields = ['firstname','surname','email','password']