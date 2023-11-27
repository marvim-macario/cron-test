import cron from 'node-cron';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9fe8a050918505",
      pass: "0a78b6dc7567d6"
    }
  });
  const message = {
    from: "marcosvinim.cruz@gmail.com",
    to: "marcosvinim.cruz@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };
cron.schedule('1 * * * * *', () =>{
    transporter.sendMail(message);
})