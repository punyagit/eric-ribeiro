const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const timeRoutes = require('./api/routes/times');
const dateRoutes = require('./api/routes/dates');

mongoose.connect('mongodb+srv://rafesilva:' + process.env.MONGO_ATLAS_PW + '@mongoose-demo-m0nct.mongodb.net/test?retryWrites=true', 

	{ useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/times', timeRoutes);
app.use('/dates', dateRoutes);

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;
