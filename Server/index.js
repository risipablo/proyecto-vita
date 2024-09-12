const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'https://proyecto-vita.onrender.com', 'https://proyecto-vita.vercel.app'],
    methods: 'GET,POST,DELETE,PATCH',
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));

app.options('*', cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, reason, message } = req.body;

    const mailOptions = {
        from: '',  
        to: process.env.EMAIL_USER, 
        subject: `Nuevo Mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMotivo : ${reason}\n ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error al enviar el correo.');
        }
        console.log('Correo enviado: ' + info.response);
        res.status(200).send('Correo enviado con éxito.');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
