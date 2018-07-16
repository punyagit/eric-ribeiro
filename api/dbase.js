const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true })

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
//       year: "2016",
//       month: "Jan",
//       date: "3"
//   },
//   {
//     year: "2007",
//       month: "aug",
//       date: "9"
//   }
//   ]
//   )

module.exports = {Date,Dbase}