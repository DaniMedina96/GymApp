import "./Footer.css";
import { Box, Grid, Container, Typography, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const elements = [
    {
      header: 'Ayuda',
      links: [
        { text: 'Contacto', url: '#' },
        { text: 'Soporte', url: '#' }
      ]
    },
    {
      header: 'Cuenta',
      links: [
        { text: 'Iniciar Sesión', url: '/login' },
        { text: 'Registrarse', url: '/signup' }
      ]
    }
  ];

  function generateFooterElements() {
    return elements.map((column, idx) => (
      <Grid key={idx} item xs={12} md={6}>
        <Box borderBottom={1} mb={2}>
          <Typography variant="h6" className="footer-header">
            {column.header}
          </Typography>
        </Box>
        {column.links.map((link, idx) => (
          <Box key={idx} mb={1}>
            <Link
              href={link.url}
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                navigate(link.url);
              }}
            >
              {link.text}
            </Link>
          </Box>
        ))}
      </Grid>
    ));
  }

  return (
    <footer className="footer">
      <Box bgcolor="#333" color="white" py={4}>
        <Container>
          <Grid container spacing={4}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign="center" py={2} className="footer-bottom">
        <Typography variant="body2">
          © GymApp 2024 - Todos los derechos reservados
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
