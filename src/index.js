const nodemailer = require('nodemailer');
require('dotenv').config();

(async function run() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        }
      });
      
      await transporter.sendMail({
        from: process.env.DAILY_REPORT_FROM,
        to: process.env.DAILY_REPORT_TO,
        subject: 'Daily Report',
        text: `
          Daily Report
        `,
        html: `
          <h1>Daily Report</h1>
          <p><a href="${process.env.FORM_URL}">form</a></p>
        `,
      });
})();