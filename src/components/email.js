require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions ={
    from: 'bababubuasl@gmail.com',
    to: 'bababubuasl@gmail.com',
    subject: 'message',
    text: 'first message'
}

transporter.sendMail(mailOptions)