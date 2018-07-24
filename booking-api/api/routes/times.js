const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Time = require('../models/time');




router.get('/', (req, res, next) => {
	Time.find()
	.select('time description duration _id')
	.exec()
	.then(docs => {
		const response = {
		count: docs.length,
		times: docs.map( doc => {
			return {
				time: doc.time,
				description: doc.description,
				duration: doc.duration,
				_id: doc._id,
				request: {
					type: 'GET',
					url: '/times/' + doc._id

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
	const time = new Time({
		_id: new mongoose.Types.ObjectId(),
		time: req.body.time,
		description: req.body.description,
		duration: req.body.duration
	});
	time.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
			message: "Scheduled a time succesfully",
			createdTime: {
			time: result.time,
			description: result.description,
 			duration: result.duration,
 			_id: result._id,
 			request: {
 				type: 'GET',
 				url: '/times/' + result._id
 			
				}
			}
		})
	})
	.catch(err => console.log(err));

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




router.delete("/:timeId", (req, res, next) => {
  const id = req.params.timeId;
  Time.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Time deleted',
          request: {
              type: 'POST',
              url: '/times',
              body: { description: 'String', duration: 'Number' }
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

