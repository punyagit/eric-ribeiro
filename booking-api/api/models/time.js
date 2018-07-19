const mongoose = require('mongoose');

const TimeSchema = mongoose.Schema({
	//_id: mongoose.Schema.Types.ObjectId,
	time: Number,
	description: String,
	duration: Number 
});

//module.exports = mongoose.model('Time', timeSchema);
const Time = mongoose.model('Time', TimeSchema);

// Time.create(
// 	[
// 		{
// 			time: 2,
// 			description: "Hair Cut",
// 			duration: 3
// 		}
// 	]
// )

module.exports = Time
