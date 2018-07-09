const express = require('express')
const router = express.Router();

const mongoose = require('mongoose');

const Date = require('../models/date');

router.get('/', (req, res, next) => {
	Date.find().exec().then(docs => {
		res.status(200).json(docs);
	}).catch(err => {
		res.status(500).json({
			error: err
		}); 
	});
	
});

router.post('/', (req, res, next) => {
		const date = new Date({
		_id: mongoose.Types.ObjectId(),
		durationof: req.body.duration,
		time: req.body.timeId

	});
	date.save().then( result =>
	{
		console.log(result);
		res.status(201).json(result);

	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
	res.status(200).json({
		message: 'Date was scheduled',
		date: date
	});
});

router.get('/:dateId', (req, res, next) => {
	res.status(200).json({
		message: 'Date times',
		dateId: req.params.dateId
	});
});


router.delete('/:dateId', (req, res, next) => {
	res.status(200).json({
		message: 'Date delete',
		dateId: req.params.dateId
	});
});
module.exports = router;

