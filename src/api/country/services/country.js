'use strict';

/**
 * country service.
 */

const { createCoreService } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'user@gmail.com',
      pass: 'password',
    },
  });



module.exports = createCoreService('api::country.country',({ strapi }) => ({
    send(from, to, subject, text) {
      // Setup e-mail data.
      const options = {
        from,
        to,
        subject,
        text,
      };
  
      // Return a promise of the function that sends the email.
      return transporter.sendMail(options);
    },
  }));
   
