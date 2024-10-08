/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Certificazioni.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { certificationData as data} from "../../data/Data";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;


/*----------------------------------------
  COMPETENZE  STRUCTURE
  ----------------------------------------
*/
const Certificazioni = () => {
    const [isCertificationSelected, setIsCertificationSelected] = useState(true);

    // Gestione stile del titolo
    const [isHovered, setIsHovered] = useState(false);
    const certificationStyle = {
        cursor: !isHovered ? "default" : "pointer",
        fontSize: "35px",
        fontWeight: "bold",
        textDecoration: !isHovered ? "" : "underline"
    }

    return <div className="certification-main-container">
        <div className="certification-title-wrapper">
            {!isCertificationSelected ? 
            <FontAwesomeIcon icon={faCaretDown} style={{fontSize: "30px"}}/>
            : <FontAwesomeIcon icon={faCaretUp} style={{fontSize: "30px"}}/>
            }
            <p style={certificationStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsCertificationSelected(!isCertificationSelected)}>
                Certificazioni
            </p>
        </div>

        <div className={!isCertificationSelected ? "not-show" : "certification-lista-esperienze"}>
            {data.map((item,index) => (
                <div key={index} className="certification-single-item" style={{fontSize: "18px"}}>
                    <div key={index} className="certification-dates">
                        {item.dataConseguimento ? (
                            <p>Conseguito il {item.dataConseguimento}</p>
                        ) : (
                            <p>In corso</p>
                        )}
                    </div>
                    
                    <div className="certification-details">
                        <h4 style={{fontSize: "23px"}}>{item.corso}</h4>
                        <p>{item.luogo}</p>
                        <p>{item.ente}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Certificazioni;