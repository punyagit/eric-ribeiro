const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
	//_id: mongoose.Schema.Types.ObjectId,
	//time: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' },
	date: { type: Number}, //,default: Date.now },
	month: { type: Number },
	year: { type : Number }
	
});

const Day = mongoose.model('Day', dateSchema);

// Day.create(
// 	{
//    date: 24,
//    month:7,
//    year: 2018
// 	},
// 	{
// 		date: 20,
// 		month:7,
// 		year: 2018
// 		 },
// 		 {
// 			date: 21,
// 			month:7,
// 			year: 2018
// 			 }
			 
// )





module.exports = Day