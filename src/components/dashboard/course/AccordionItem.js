import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {List, ListItem, ListItemText} from '@mui/material'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>Introducción y OpenGL</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <List>
            <ListItem>
                <ListItemText primary='Lección - Introducción al curso'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Articulo - Invitación a la Computación Gráfica'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lección - Curvas Bezier y Splines'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Cuestionario - Curvas Bezier y Splines'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lección - Coordenadas y transformaciones'></ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'>Conceptos básicos de animación</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText primary='Lección - Introducción al curso'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Articulo - Invitación a la Computación Gráfica'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lección - Curvas Bezier y Splines'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Cuestionario - Curvas Bezier y Splines'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lección - Coordenadas y transformaciones'></ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'>Conceptos básicos de Modelación</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem>
                <ListItemText primary='Lección - Introducción al curso'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Articulo - Invitación a la Computación Gráfica'></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lección - Curvas Bezier y Splines'></ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}