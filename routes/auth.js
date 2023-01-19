const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')
const User = require('../models/User')

router.get('/createuser', [
    body('name', 'Name must be atleast 3 letters long').isLength({min: 3}),
    body('password', 'Passowrd be atleast 5 letters').isLength({min: 5}),
    body('email', "Email ist't valid").isEmail(),
    body('phoneno', 'Phone number cannot be more or less than 10 numbers').isLength({min: 10, max: 10})
] ,async (req, res)=>{
try {

    let user = await User.findOne({email: req.body.email})
    if(user){
        res.json({error: "Sorry a user with the email already exsists"})
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneno: req.body.phoneno
    })

    res.send({user})
} catch (error) {
	console.log('error')
}
})

module.exports = router;