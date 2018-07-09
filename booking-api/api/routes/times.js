const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Time = require('../models/time');


router.get('/', (req, res, next) => {
	Time.find().exec().then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
});
router.post('/', (req, res, next) => {
	const time = new Time({
		_id: new mongoose.Types.ObjectId(),
		description: req.body.description,
		duration: req.body.duration
	});
	time.save()
	.then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));

	res.status(201).json({
		message: 'Handling POST Time to /times',
		createdTime: time
	});
});

router.get('/:timeId', (req, res, next) => {
	const id = req.params.timeId;
	Time.findById(id)
	.exec()
	.then(doc => {
		console.log('From database', doc);
		if (doc){
			res.status(200).json(doc);
		} else {
			res.status(404).json({message: 'No valid time'})

		}
	})
	.catch(err => console.log(err));
});

router.patch('/:timeId', (req, res, next) => {
	res.status(200).json({
		message: "Updated succesfully"
	})
})

router.delete('/:timeId', (req, res, next) => {
	const id = req.params.productId;
	Time.remove({
		_id: id
	}).exec().then(result => {
		res.status(200).json(result);
	})
	.catch(err => {
		console.log(err);
		error: err
	});
});
module.exports = router;

