const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  try {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dehinbonatt@gmail.com',
        pass: 'fsgxwamusrohixdw'
      }
    });

    const mailOptions = {
      from: 'dehinbonatt@gmail.com',
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
