const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'pablorisi22@gmail.com',
        pass:'qarabprreiehtiol'
    }
});

app.post('/send-email', async(req,res) => {
    const { name, email, phone, reason, message } = req.body;

    const mailOptions = {
        from:'pablorisi22@gmail.com',
        to:'pablorisi22@gmail.com',
        subject:`Nuevo Mensaje de ${name}`,
        text:`Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMotivo : ${reason}\n ${message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error)
            return res.status(500).send('Error al enviar el correo.')
        }
        console.log('Correo enviado: ' + info.response);
        res.status(200).send('Correo enviado con éxito.');
    })
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});