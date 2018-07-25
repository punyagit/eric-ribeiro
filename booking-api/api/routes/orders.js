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
    Order.find()
    .then(data => {
    resp.send(data)
})
})



router.delete("/:dateId", (req, res, next) => {
    Order.remove({ _id: req.params.dateId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Date deleted",
          request: {
            type: "POST",
            url: "/dates",
            body: { timeId: "ID", duration: "Number" }
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });




module.exports = router;