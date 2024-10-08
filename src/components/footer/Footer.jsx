/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Footer.css";
import PDFGenerator from "../pdf_generator/PDFGenerator";
import { BrowserRouter, NavLink } from "react-router-dom";
import { useState } from "react";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_1 = "#72BF78";
const COLOR_3 = "#D3EE98";


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Footer = () => {
    const [isHover, setIsHover] = useState(false);

    // Stile del link
    const navStyle = {
        color: "white",
        fontSize: "20px",
        textDecoration: !isHover ? "none" : "underline"
    }

    return <footer style={{ backgroundColor: `black`, textAlign: "center", minHeight:"10vh" }}>
        <NavLink to={"download_pdf"} style={navStyle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            Scarica PDF
        </NavLink>
    </footer>
};

export default Footer;