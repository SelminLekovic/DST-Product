// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7777;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ message: 'No form data provided.' });
    }
    const { name, email, phone, message } = data;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_TOKEN,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "selminlekovic@gmail.com",
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Your message has been sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'There was an error sending your message. Please try again later.' });
    }
});
app.get('/', (req, res) => {
    res.send('Welcome to the contact form server!');
  });
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
