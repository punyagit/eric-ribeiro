const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Signup = require('../models/signup');



router.post('/', (req, res, next) => {
    // Signup.create().then(res => {
    //     res.json()
    // })
    const signup = new Signup({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		password: req.body.password,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    });
    signup.save()
    .then(result => {
		console.log(result);
		res.status(201).json({
			message: "User created, now choose a time",
			createdTime: {
			name: result.name,
			password: result.password,
             email: result.email,
             phonenumber: result.phonenumber,
       _id: result._id,
 			request: {
 				type: 'GET',
 				url: 'localhost:3000/signup/' + result._id
 			
				}
			}
		})
    })
    .catch(err => console.log(err));

})

module.exports = router;