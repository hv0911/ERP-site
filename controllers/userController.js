const User = require("../models/UserModels/User");
const ErrorHandler = require("../utils/errorhander");
const sendToken = require("../utils/jwtTokens");



exports.registerUser = async(req , res , next)=>{

    try {

        const {name , email , password} = req.body;

        const user = await User.create({
            name,email,password,
            avatar:{
                public_id:"This is a sample Id",
                url:"profileUrl"
            }
        });

        sendToken(user,201,res);

    //     const token = user.getJWTToken();
    
    //    return  res.status(201).json({
    //         success:true ,
    //         token:token
    //     });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error
        })
    }
   
}

exports.login = async(req , res , next) =>{

    const { email , password } = req.body;

    if(!email || !password ){
        return next(new ErrorHandler("Please Enter Email & password" , 400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password"))
    }

    const isPasswordMatched = user.camparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    // const token = user.getJWTToken();
    
    // return  res.status(201).json({
    //      success:true ,
    //      token:token
    //  });     
    sendToken(user,201,res);

}