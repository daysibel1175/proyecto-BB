import { Container } from '@mui/material'
import Nav from '../componentes/Nav' 
import Footer from '../componentes/Footer'
import "../assets/home.css"
import banner from "../images/banner.png"
import SimpleAccordion from "../componentes/accordion"
function Home() {

  return (
    <div>
     
        <Nav/>
     
      <div className='home'> {/* Ajusta este valor según la altura de tu Nav */}
        <div className='banner'> 
          <h1>Bodebras delivery</h1>
          <h1>Por qué escoger Bodebras? </h1>
          <h1>texto de bienvenida</h1>
        </div>
        <div className='accordion'>
          <SimpleAccordion/>
        </div>
        {/* Resto de tu contenido */}
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
     
  
   
    

   
    
  )
}

export default Home