const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');


// router.post('/',function(req, resp){
//     const order = req.body
//     Order.create(order).then(order => {
//         resp.json(order)
//     })
// })

router.post('/', function (req, resp) {
    const order = (req.body)
    console.log(order)
    //resp.send(order)
    Order.create(order).then(order => {
        resp.json(order)
    })
    


    // const myOrder = new Order(req.body)
    // //myOrder.save()
    // .then(item => {
    //     resp.send("item saved to database");
    //     })
    //     .catch(err => {
    //     res.status(400).send("unable to save to database");
    //     });
       });


router.get('/',(req, resp) => {
    Order.find({})
    .then(resp =>{
        resp.send(resp)
    })
    

})




// router.post('/', (req, res, next) => {
// 	const service = new Service({
// 		_id: new mongoose.Types.ObjectId(),
// 		name: req.body.name,
// 		description: req.body.description,
//     duration: req.body.duration,
//     price: req.body.price
// 	});
// 	service.save()
// 	.then(result => {
// 		console.log(result);
// 		res.status(201).json({
// 			message: "Item chosen, now choose a time",
// 			createdTime: {
// 			name: result.name,
// 			description: result.description,
//  			duration: result.duration,
//       price: result.price,
//        _id: result._id,
//  			request: {
//  				type: 'GET',
//  				url: 'localhost:3000/orders/' + result._id
 			
// 				}
// 			}
// 		})
// 	})
// 	.catch(err => console.log(err));
// });



module.exports = router;