const express = require('express')
const router = express.Router();

const mongoose = require('mongoose');

const Day = require('../models/date');
const Time = require('../models/time');

router.get('/', (req, res, next) => {
	Day.find()
	.populate('time')
	.select('time description duration _id date month year')
	.exec()
	.then(docs => {	res.status(200).json({
			count: docs.length,

			days: docs.map(doc => {
				return { 
					date: doc.date,
					month: doc.month,
					year: doc.year,

					_id: doc._id,
					time: doc.time,
					description: doc.description,
					duration: doc.duration,
					request: {
						type: 'GET',
						url: 'https://localhost:3000/dates/' + doc._id
					}
				}
			})
		})
	})
	.catch(err => {
		res.status(500).json({
			error: err
				})
			
		});
	});
		
	
router.post('/', (req, res, next) => {
	Time.findById(req.body.timeId)
    .then( time => {
      if (!time) {
        return res.status(404).json({
          message: "Time in use"
        });
      }
      	
		const day = new Day({
		_id: mongoose.Types.ObjectId(),
		date: req.body.date,
		month: req.body.month,
		year: req.body.year,

		time: req.body.timeId
		

	});
	return day.save();
	})
	.then( result => {
		console.log(result);
		res.status(201).json({
			message: 'Date and time scheduled',
			createdDay: {
				_id: result._id,
				time: result.time,
				date: result.date,
				month: result.month,
				year: result.year

			},
			request: {
				type: 'GET',
				url: 'http://localhost:3000/dates' + result._id
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


router.get('/:date/:month/:year', (req, res, next) => {
	Day.find({
		date: req.params.date,
		year: req.params.year,
		month: req.params.month
	})
	.populate('time')
	.select('time description duration _id date month year')
	.then(day => {	res.status(200).json({
		message: 'Date and times inside it',
		day: day
	
		// day: days.map( day => {
		// 	return { 
		// 		date: day.date,
		// 		month: day.month,
		// 		year: day.year,
		// 		time: day.time
				
		// 		};
		// 	})

	
		});
	}) 
});


router.delete("/:dateId", (req, res, next) => {
  Day.remove({ _id: req.params.dateId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Date deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/dates",
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

