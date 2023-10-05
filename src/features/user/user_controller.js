const User = require('./user_model');
const jwt = require('jsonwebtoken');

const signup = async(req, res) => {
   const {name, email, password, type} = req.body;
   const user = await User.findOne({email});
   if(user) {
    res.send('User already exist');
   }
   await User.create({name, email, password, type});
   res.status(201).send('Signup successfully');
}



const signin = async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if(!user || user.password != password ) {
  res.status(400).send('Invalid Credential');
  }
  const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
  res.status(200).send(token);
}


module.exports = {
    signin,
    signup
}