const express = require('express')
const server = express()
const {Date,Dbase} = require('./dbase')

//const data = require('./seed/data')
server.get('/data/:year/:month', function (req, res) {
  //const id = req.params.id
  Date.find({
    year: req.params.year,
    month: req.params.month,
		
	}).then(datas => {
      res.json(datas)
    })
    
  })

  server.get('/:year', function (req, res) {
    //const id = req.params.id
    Date.find({
      year: req.params.year
      
      
    }).then(dat =>  {
      
      res.send(dat)
    }
        
      )
      
    })
  

 

  server.listen(4000)


