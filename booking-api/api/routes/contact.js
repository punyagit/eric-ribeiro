const express = require('express');
const emailRouter = express.Router();
const sgMail = require('@sendgrid/mail');



emailRouter.post('/', (req, resp, next) => {

    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
      const msg = {
        to: 'hackscriptboys@gmail.com',
        from: 'example999@gmail.com',
        subject: 'SENDGRID WORKS NOW FINALLY',
        text: "After two days of smashing keyboards and headbutting screens.."
      }

      
      sgMail.send(msg);

})

module.exports = emailRouter;

