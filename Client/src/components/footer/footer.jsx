import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '@fontsource/poppins';

export function Footer() {
    return (
        <Box 
            sx={{
                backgroundColor: 'rgb(12, 49, 95)', 
                color: 'white', 
                textAlign: 'center', 
                p: 2, 
                fontFamily: 'Poppins',
                '& .footer-item': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    mt:2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                },
                '@media (min-width: 768px)': { 
                    '& .footer-items-container': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin:'2rem 0',
                    },
                    '& .footer-item': {
                        mb: 2,
                    }
                }
            }}
        >
            <Box className="footer-items-container">
                <Box className="footer-item" >
                    <IconButton href="https://www.instagram.com/casavita.salud/" target="_blank" sx={{ color: 'white' }}>
                        <InstagramIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ ml: 1, fontSize:'1.1rem', fontWeight:'500' }}>casa.vita</Typography>
                </Box>
                <Box className="footer-item">
                    <IconButton href="mailto:correo@ejemplo.com" sx={{ color: 'white'}}>
                        <EmailIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ ml: 1,  fontSize:'1.1rem', fontWeight:'500'  }}>casavita720@gmail.com</Typography>
                </Box>
                <Box className="footer-item">
                    <IconButton href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.179527159179!2d-67.99396493804949!3d-38.94203748850425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30f916b6ca4d%3A0x1f51c4828bc567a9!2sGral.%20Fern%C3%A1ndez%20Oro%20720%2C%20R8324%20Cipolletti%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1724451618675!5m2!1ses!2sar"  target="_blank" sx={{ color: 'white' }}>
                        <LocationOnIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ ml: 1 ,fontSize:'1.1rem', fontWeight:'500'}}>Gral. Férnandez Oro 720</Typography>
                </Box>
            </Box>
            <Box sx={{  borderTop: '1px solid black', pt: 1 }}>
                <Typography variant="body2" sx={{ fontSize:'1rem', fontWeight:'500', mt:'1rem'}}>Casa Vita se reserva todos los derechos</Typography>
            </Box>
        </Box>
    );
}
