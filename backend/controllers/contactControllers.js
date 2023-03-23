const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  try {
    const { email, message } = req.body;

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
      from: 'info@shop-easy.live',
      to: 'dehinbonath@yahoo.com',
      subject: `New message from ${email}`,
      text: `Email: ${email}\nMessage: ${message}`
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
