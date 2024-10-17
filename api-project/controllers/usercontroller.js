const User = require('../models/User')

async function addUser(req,res){
    try{
        let user = new User(req.body);
        await user.save();
        let users = await User.find({});
        console.log(users);
        res.status(200).send({success : true , message : 'Data sent sucessfully' , users : users})
    }catch(err){
        console.log(err.message);
        res.status(400).send({success : false , message : 'something went wrong ... '})

    } 
}


module.exports= {
    addUser
}