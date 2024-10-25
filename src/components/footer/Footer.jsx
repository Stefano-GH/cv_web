/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Footer.css";

const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_6 = `#${process.env.REACT_APP_COLOR_6}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Footer = ( {data} ) => {
  const currentYear = new Date().getFullYear();

    return <footer className="footer" style={{backgroundColor:`${COLOR_3}`, color:`${COLOR_6}`}}>
      <p>© {currentYear} {data.anagrafica.nome} {data.anagrafica.cognome}. Tutti i diritti riservati.</p>
    </footer>
};

export default Footer;