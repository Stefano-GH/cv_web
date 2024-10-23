/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_5 = `#${process.env.REACT_APP_COLOR_5}`;

// Link della navbar
const links = [
  { titolo: "Chi Sono", href: '#about' },
  { titolo: "Istruzione", href: '#education' },
  { titolo: "Esperienza", href: '#experience' },
  { titolo: "Contatti", href: '#contact' },
]


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Navbar = ( {data} ) => {

  //////////////////////////////
  // Gestione dei link
  //////////////////////////////
  // generazione hover dinamici
  const [hoveredLinks, setHoveredLinks] = useState(new Array(links.length).fill(false));

  // funzioni per la gestione dell'hover
  const handleMouseEnter = (index) => {
    const updateHoveredLinks = [...hoveredLinks];
    updateHoveredLinks[index] = true;
    setHoveredLinks(updateHoveredLinks);
  }

  const handleMouseLeave = (index) => {
    const updateHoveredLinks = [...hoveredLinks];
    updateHoveredLinks[index] = false;
    setHoveredLinks(updateHoveredLinks);
  }

  // stile dinamico dei link
  const getLinkStyle = (isHovered) => ({
    color: isHovered ? `${COLOR_1}` : `${COLOR_5}`,
    cursor: isHovered ? "pointer" : "default",
    transition: "color 0.3s ease"
  })

  //////////////////////////////
  // Gestione burger menu
  //////////////////////////////
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [burgerHovered, setBurgerHovered] = useState(false);

  return <header className="header" style={{backgroundColor:`${COLOR_3}`, color:`${COLOR_5}`}}>
    <h1>{data.anagrafica.nome} {data.anagrafica.cognome}</h1>
    <p>{data.anagrafica.titoli}</p>

    <div className={showBurgerMenu ? "burgerMenu-items show" : "burgerMenu-items"} style={{backgroundColor:`${COLOR_3}`}}>
      {links.map((item, index) => (
        <div key={index} style={{borderTop:`1px solid ${COLOR_5}`}}>
          <a href={item.href} style={getLinkStyle(hoveredLinks[index])}
          onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
            {item.titolo}
          </a>
        </div>
      ))}
    </div>

    <div className="burgerMenu" onClick={() => setShowBurgerMenu(!showBurgerMenu)} style={getLinkStyle(burgerHovered)}
    onMouseEnter={() => setBurgerHovered(true)} onMouseLeave={() => setBurgerHovered(false)}>
      &#9776;
    </div>
  </header>;
}

export default Navbar;