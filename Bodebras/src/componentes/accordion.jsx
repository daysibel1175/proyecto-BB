import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const StyledAccordion =  styled("div")(() => ({
  width:"80%",
}));
const StyledContainer =  styled("div")(() => ({
  Height:"100%",
  minHeight:"450px",
  width:"100%",
  alignItems:"center",
  display:"flex",
  justifyContent:"space-betweem",
  flexDirection:"column"
}));

function SimpleAccordion() {
  return (
    <StyledContainer >
        <h1>Preguntas Frecuentes</h1>
         <StyledAccordion>
    
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pregunta 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aquí va la respuesta a la pregunta 1.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pregunta 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aquí va la respuesta a la pregunta 2.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Puedes agregar más acordeones según sea necesario */}
    </StyledAccordion>
    </StyledContainer>
 
  );
}

export default SimpleAccordion;
