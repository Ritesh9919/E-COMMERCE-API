const jwt = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
    // 1. read the token
    const token = req.headers['authorization'];

    //2. if not token return the error
    if(!token) {
        res.status(401).send('Unauthorized');
    }
    //3. check if token is valid
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
    } catch (err) {
         // 5. return error
        return res.status(401).send('Unauthorized');
    }
    // 4. call next middleware
    next();
   
}


module.exports = jwtAuth;