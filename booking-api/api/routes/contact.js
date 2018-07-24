const express = require('express');
const emailRouter = express.Router();
const sgMail = require('@sendgrid/mail');


emailRouter.post('/', (req, res) => {
  // console.dir(req.body)

    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
    
      const msg = {
        to: 'hackscriptboys@gmail.com',
        from: req.body.email,
        text: req.body.comment
      }

      
      sgMail.send(msg)
      //   .then(res =>
        
      //   res.status(200).json({
      //     status: res.message
      //   }
      // )
      // )
      //   .catch(res => {
      //     res.status(400).json({
      //       status: res.message
      //     }
      //   )
      //   }
      // )

})

module.exports = emailRouter;

