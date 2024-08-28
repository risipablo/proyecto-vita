import React from 'react';
import { TextField, MenuItem, Button, Box } from '@mui/material';
import "./contacto.css"

export function Contacto() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Manejo de envio del formulario con sus datos
  };

  return (
    <div className="contact-container" >

        <h2> Contacto </h2>

    <Box
      component="form"
      onSubmit={handleSubmit}
    >

      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        placeholder="Ingrese su nombre"
      />

      <TextField
        label="Teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        placeholder="Ingrese su teléfono"
        InputProps={{
          startAdornment: <span>299 </span>
        }}
      />

      <TextField
        label="Motivo"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        select
      >
        <MenuItem value="consultas">Consultas</MenuItem>
        <MenuItem value="turnos">Turnos</MenuItem>
      </TextField>
      <TextField
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        placeholder="Escribe tu mensaje aquí"
      />

      <div className='button'>
        <Button
            variant="contained"
            type="submit"
            sx={{
                width: '200px',
                borderRadius: 2,
                '&:hover': {
                backgroundColor: 'rgba(0, 123, 255, 0.8)',
                },
                '&:active': {
                transform: 'translateY(2px)',
                boxShadow: 3,
                },
            }}
            >
            Enviar
        </Button>
      </div>

      </Box>
    </div>
  );
}
