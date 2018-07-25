const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Service = require('../models/service');

router.get('/', (req, res, next) => {
	Service.find()
	.select('name description duration image price _id')
	.exec()
	.then(docs => {
		console.dir(docs.data)

		const response = {
		count: docs.length,
		services: docs.map( doc => {
			return {
				name: doc.name,
				description: doc.description,
        duration: doc.duration,
				price: doc.price,
				image: doc.image,
				_id: doc._id,
				request: {
					type: 'GET',
					url: '/services/' + doc._id

				}
			}
		})
	};

	res.status(200).json(response);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
			
		});
	});
});

router.post('/', (req, res, next) => {
	const service = new Service({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		description: req.body.description,
    duration: req.body.duration,
		price: req.body.price,
		image: req.body.image
	});
	service.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
			message: "Item chosen, now choose a time",
			createdTime: {
			name: result.name,
			description: result.description,
 			duration: result.duration,
			price: result.price,
			image: result.image,
       _id: result._id,
 			request: {
 				type: 'GET',
 				url: '/services/' + result._id
 			
				}
			}
		})
	})
	.catch(err => console.log(err));
});

router.get('/:serviceId', (req, res, next) => {
	const id = req.params.serviceId;
	Service.findById(id)
	.exec()
	.then(doc => {
		console.log('From database', doc);
		if (doc){
			res.status(200).json(doc);
		} else {
			res.status(404).json({message: 'Not valid'})

		}
	})
	.catch(err => console.log(err));
	});

router.patch('/:serviceId', (req, res, next) => {
	res.status(200).json({
		message: "Updated succesfully"
	})
})

router.delete("/:serviceId", (req, res, next) => {
  const id = req.params.serviceId;
  Service.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Service deleted',
          request: {
              type: 'POST',
              url: '/services',
              body: { description: 'String', duration: 'Number', price: 'Number' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;