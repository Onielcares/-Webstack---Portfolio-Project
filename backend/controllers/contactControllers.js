const nodemailer = require('nodemailer');

const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;
const mailSubjectTemplate = process.env.MAIL_SUBJECT;

exports.submitContact = async (req, res) => {
  try {
    const mailSubject = `${mailSubjectTemplate} ${req.body.email}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const mailOptions = {
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: `Email: ${req.body.email}\nMessage: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: 'error',
          code: 500,
          message: 'Unable to send email'
        });
      }
      console.log(`Email sent: ${info.response}`);
      return res.status(200).json({
        status: 'Success',
        code: 200,
        message: 'Email sent Successfully'
      });
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to submit contact'
    });
  }
};
