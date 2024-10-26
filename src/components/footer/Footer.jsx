/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_6 = `#${process.env.REACT_APP_COLOR_6}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Footer = ( {data} ) => {

  const currentYear = new Date().getFullYear();

  // gestione link scarica pdf
  const [pdfHovered, setPdfHovered] = useState(false);

    return <footer className="footer" style={{backgroundColor:`${COLOR_3}`, color:`${COLOR_6}`}}>
      
      <NavLink to={"/cv_web/download_pdf"} onMouseEnter={() => setPdfHovered(true)} on onMouseLeave={() => setPdfHovered(false)}
        style={{
          color: pdfHovered ? `${COLOR_1}` : `${COLOR_6}`,
          cursor:'pointer',
          textDecoration: pdfHovered ? 'underline' : ''
        }}
      >
        Scarica PDF
      </NavLink>
      <p style={{ marginTop:'1em' }}>© {currentYear} {data.anagrafica.nome} {data.anagrafica.cognome}. Tutti i diritti riservati.</p>
    </footer>
};

export default Footer;