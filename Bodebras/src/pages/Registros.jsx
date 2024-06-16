import Agregar from '../componentes/Agregar' 
import GoogleMapContainer from '../componentes/Maps'
import Nav from '../componentes/Nav' 
import {  styled , Container } from "@mui/material";

const StyledRegistro = styled("div")(() => ({
  gap:"1rem",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  height:'100%',
  width:"100%",
  '@media (max-width: 800px)': {
    flexDirection: 'column',
  }
}));

function Registros() {

  return (
    <Container>
      <Nav/>
      <StyledRegistro>
    <Agregar/>
    <GoogleMapContainer/>
    </StyledRegistro>
    </Container>
   
  )
}

export default Registros

