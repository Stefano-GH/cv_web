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
const Footer = ( {data, useEnglish} ) => {

  const currentYear = new Date().getFullYear();

    return <footer className="footer" style={{backgroundColor:`${COLOR_3}`, color:`${COLOR_6}`}}>
      
      <NavLink to={"/cv_web/download_pdf"} style={{ color:`${COLOR_3}` }}>
        {data.testi.home_footer_scaricaPdf}
      </NavLink>
      <p style={{ marginTop:'1em' }}>© {currentYear} {data.anagrafica.nome} {data.anagrafica.cognome}. {data.testi.home_footer_dirittiRiservati}</p>
    </footer>
};

export default Footer;