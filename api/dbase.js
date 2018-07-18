const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('dotenv').load();
//mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true })
mongoose.connect(`mongodb+srv://hackscriptboys:${process.env.MONGO_ATLAS_PW}@hackscriptboys-cak53.mongodb.net/test?retryWrites=true`, 

	{ useNewUrlParser: true }
);
//mongoose.connect('mongodb+srv://hackscriptboys:hackhack123@hackscriptboys-cak53.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true })

const ModeSchema = Schema({
    year: String,
    month: String,
    date: String
})



const Date = mongoose.model('Dat',ModeSchema)
const Dbase = mongoose.model('Dbase',ModeSchema)

// Date.create(
//     [
//       {
//       year: "2018",
//       month: "July",
//       date: "21"
//   },
//   {
//     year: "2018",
//       month: "july",
//       date: "25"
//   }
//   ]
//   )

module.exports = {Date,Dbase}