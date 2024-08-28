import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

const WhatsAppButton = styled(IconButton)({
  position: 'fixed',
  bottom: '20px',
  right: '18px',
  backgroundColor: '#25D366',
  color: '#ffffff',
  borderRadius: '50%',
  width: '55px',
  height: '55px',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#25D366',

  },
});

export function Whatsapp() {
  return (
    <WhatsAppButton
      href="https://wa.me//2996551204"
      target="_blank"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon style={{ fontSize: 35 }} />
    </WhatsAppButton>
  );
}
