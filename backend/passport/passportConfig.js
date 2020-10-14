const User = require('../models/user')
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy

module.exports = function(passport){
    passport.use(
        new localStrategy((username,password,done)=>{
            User.findOne({username:username},(err,user)=>{
                if(err) throw err
                if(!user) return done(null,false)
                bcrypt.compare(password,user.password,(err,result)=>{
                    if(err) throw err
                    if (result===true){
                        return done(null,user)
                    }
                    else{
                        return done(null,false)
                    }
                })
            })
        })
    )
    passport.serializeUser((user,callback)=>{
        callback(null, user.id)
    })
    
    passport.deserializeUser((id,callback)=>{
        // deseralize and get the id of the user, 
        // which can be queried from the db
        User.findOne({_id:id},(err,user)=>callback(err,user))
    })
}