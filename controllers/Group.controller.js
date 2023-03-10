const {Group} = require('../models')

module.exports.createGroup=async(req,res,next)=>{
    try{
        const {body} = req
        const created = await Group.create(body)
        return res.status(201).send('Group created')    
    }
    catch(error){
        next(error)
    }
}

module.exports.addUserToGroup=async(req,res,next)=>{
    try{
        const {userInstance, params: {groupId}} = req
        const groupInstance = await Group.findByPk(groupId)
        const result = await groupInstance.addUser(userInstance)
        return res.status(200).send('User successfullt addded to group')  
    }
    catch(error){
        next(error)
    }
}