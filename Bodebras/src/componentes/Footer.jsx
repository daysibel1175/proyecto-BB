import { Link } from 'react-router-dom';
import '.././assets/footer.css'
import logo from '../../src/images/LOGO.jpg'
import { Grid } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';

function Footer() {
    return ( 
         <footer className="footer">
              <Grid container spacing={2} style={{textAlign:"start"}}>
        <Grid item xs={12} md={3} className='footer-rigth' style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
          <img src={logo} alt="Logo" className='logo-footer'/>
          <p>Descripcion de la pagina en un resumen.</p>
        </Grid>
        
        <Grid item xs={12} md={3} className='listas'>
            <h4>Servicios</h4>
          <ul className='list'>
            <li><Link href="/soporte" className='link'><LocalShippingIcon/>Preceso de Entregas</Link></li>
            <li><Link href="/ayuda" className='link'><PaymentIcon/>Metodos de pago</Link></li>
            <li><Link href="/preguntas-frecuentes" className='link'></Link></li>
            <li><Link href="/sobre-nosotros" className='link'><WhereToVoteIcon/>Cobertura</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} className='listas'>
            <h4>Soporte</h4>
          <ul className='list'>
            <li><Link href="/soporte" className='link'><SupportAgentIcon/>Atencion al cliente</Link></li>
            <li><Link href="/ayuda" className='link'><HelpOutlineIcon/>Ayuda</Link></li>
            <li><Link href="/preguntas-frecuentes" className='link'><InfoIcon/>Preguntas Frecuentes</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} className='listas'>
          <h4>Contactenos</h4>
          <ul className='list'>
            <li><Link href="mailto:email@example.com" className='link'><MailOutlineIcon/>ayuda@bodebras.com</Link></li>
            <li><PhoneIcon/>988658475</li>
            <li><Link href="https://api.whatsapp.com/send?phone=123456789&text=Hola,%20necesito%20soporte" className='link'><WhatsAppIcon/>32998546814</Link></li>
            <li><Link href="https://www.instagram.com/" className='link'><InstagramIcon/>@bodebras</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <span>Todos los derechos reservados para Bodebras</span>
</Grid>
      </Grid>
      
      </footer>
      
     
    );
  }
  export default Footer;
