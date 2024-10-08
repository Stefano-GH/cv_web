/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Istruzione.css";
import { useState } from "react";
import {educationData as data} from "../../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from "@fortawesome/free-solid-svg-icons";

const COLOR_1 = "#72BF78";


/*----------------------------------------
  ISTRUZIONE  STRUCTURE
  ----------------------------------------
*/
const Istruzione = () => {
    const [isEducationSelected, setIsEducationSelected] = useState(false);

    // Gestione stile del titolo
    const [isHovered, setIsHovered] = useState(false);
    const educationStyle = {
        cursor: !isHovered ? "default" : "pointer",
        fontSize: "35px",
        fontWeight: "bold",
        textDecoration: !isHovered ? "" : "underline"
    }

    return <div className="education-main-container">
        <div className="education-title-wrapper">
            {!isEducationSelected ? 
            <FontAwesomeIcon icon={faCaretDown} style={{fontSize: "30px"}}/>
            : <FontAwesomeIcon icon={faCaretUp} style={{fontSize: "30px"}}/>
            }
            <p style={educationStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsEducationSelected(!isEducationSelected)}>
                Istruzione
            </p>
        </div>

        <div className={!isEducationSelected ? "not-show" : "education-lista-esperienze"}>
            {data.map((item,index) => (
                <div key={index} className="education-single-item" style={{fontSize: "18px"}}>
                    <div key={index} className="education-dates">
                        <p>Da {item.dataInizio} a {item.dataFine ? item.dataFine : "oggi"}</p>
                    </div>
                    
                    <div className="education-details">
                        <h4 style={{fontSize: "23px"}}>{item.corso}</h4>
                        <p>{item.universita}</p>
                        {item.tesi ? <div className="settore-wrapper">
                            <p style={{color:`${COLOR_1}`, marginRight: "1vh"}}>Tesi:</p>
                            <p>{item.tesi}</p>
                        </div> : ""
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Istruzione;