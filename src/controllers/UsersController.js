const userModel = require ('../models/UserModel')

const UsersList = async(req, res, next)=>{
    try{
        const users = await userModel.findAll()
        res.send(users)
    } catch (error) {
        res.send ({
            'sucess':false,
            'error':`erro na requisição ${error}`
        })
    }
}

const UsersListId = async (req,res,next) => {
  try {
      const id = req.params.id
      const userId = await userModel.findOne(
          { where: { id } });
      if (!userId) {
          return res.status(404).json({
              sucess: false,
              message:`Usuário não encontrado!!`
          })
      } 

      res.send(userId)
    

      } catch (error) {
          return res.status(400).json({
              success: false,
              message: `Falha na requisição ${error}`
          })

      }

}

const UsersCreate = async(req,res,next)=>{
    try{
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email 
        const password = req.body.password

        
        const bcrypt = require ('bcrypt')
        const saltRound = 10
        const hash = await bcrypt.hash(password, saltRound)

        const user = await userModel.create ({
            firstname: firstname,
            surname: surname,
            email: email,
            password: hash
        });

        res.send({
            'sucess':true,
            'message':`Usuário criado com sucesso! ID: ${user.id - user.name}`
        })
    } catch (error){
        res.send({
            'sucess':false,
            'error':`erro na requisição ${error}`
        })
    }
  }

  
  const UserUpdate= async(req,res,next)=>{
    try{
      const id=req.params.id
      const idValid= await userModel.findOne({where:{id:id}})
  
  
  
      if(idValid){
       
        const user=await userModel.update(req.body,{
          where:{id}
        })
        res.send({
        'sucess':true,
        'message': `Usuario alterado com sucesso" id: ${user.id - user.FirstName}`
        })
      }else{
        res.send({
          'sucess':true,
          'message': "usuario nao encontrado"
        })
      }
  
  
    }catch(error){
      res.send({
        'sucess':false,
        'error': `erro na requisição ${error}`
      })
    }
  }


const UserDelete = async (req,res,next) => {
   
    try {
        const id = req.params.id
        const user = await userModel.destroy( {
            where: { id }
        });
       
        res.status(200).send({
            'sucess': true,
            'message': `Usuário deletado com sucesso! ID: ${user.id - user.name}`
        })

        
    } catch (error) {
        res.send({
            'sucess': false,
            'message': `Falha na listagem de usuários${error}`
        })
    }
}


module.exports={UsersList,UsersListId, UsersCreate, UserUpdate, UserDelete};