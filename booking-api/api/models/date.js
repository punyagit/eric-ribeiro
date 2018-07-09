const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	time: { type: mongoose.Schema.Types.ObjectId, ref: 'Time', required: true },
	duration: { type: Number, default: 1 }
});

module.exports = mongoose.model('Date', dateSchema);