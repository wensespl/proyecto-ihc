import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ReactPlayer from 'react-player'

export default function SimpleAccordion({ content }) {
  return (
    <div>
      {content.map((item) => (
        <Accordion key={item._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panela-content`}
            id="panel1a-header"
          >
            <Typography variant="h5">{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReactPlayer width={700} url={item.link} controls={true} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
