const model = require('../models/users')



module.exports = {

    get:(req,res)=>{
        res.json(model)
    },
    post:(req,res)=>{
        model.push(req.body)
       
       res.end('added successfully')

    },
    param:(req,res)=>{
        console.log(req.params)
        res.json(model[req.params.id])
    

    },
    dele:(req,res)=>{
          model.splice(req.params.id,1)

          res.send('deleted')

    },
    userput:(req,res)=>{
        model[req.params.id]=req.body
        res.send('put the value')


    }

    
  
}
