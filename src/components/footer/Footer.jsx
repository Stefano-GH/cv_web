/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Footer.css";
import { NavLink } from "react-router-dom";

const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;
const COLOR_6 = `#${process.env.REACT_APP_COLOR_6}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Footer = ( {data} ) => {
  const currentYear = new Date().getFullYear();

    return <footer className="footer" style={{backgroundColor:`${COLOR_4}`, color:`${COLOR_6}`}}>
      <p>© {currentYear} {data.anagrafica.nome} {data.anagrafica.cognome}. Tutti i diritti riservati.</p>

      {/*
      <NavLink to={"download_pdf"}>
        Scarica PDF
      </NavLink>
      */}
    </footer>
};

export default Footer;