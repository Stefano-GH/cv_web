/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./CompetenzeInfo.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { informaticsData as data} from "../../data/Data";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;


/*----------------------------------------
  COMPETENZE INFORMATICHE  STRUCTURE
  ----------------------------------------
*/
const CompetenzeInfo = () => {
    const [isInformaticsSelected, setIsInformaticsSelected] = useState(false);

    // Gestione stile del titolo
    const [isHovered, setIsHovered] = useState(false);
    const informaticsStyle = {
        cursor: !isHovered ? "default" : "pointer",
        fontSize: "35px",
        fontWeight: "bold",
        textDecoration: !isHovered ? "" : "underline"
    }

    return <div className="informatics-main-container">
        <div className="informatics-title-wrapper">
            {!isInformaticsSelected ? 
            <FontAwesomeIcon icon={faCaretDown} style={{fontSize: "30px"}}/>
            : <FontAwesomeIcon icon={faCaretUp} style={{fontSize: "30px"}}/>
            }
            <p style={informaticsStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsInformaticsSelected(!isInformaticsSelected)}>
                Competenze Informatiche
            </p>
        </div>

        <div className={!isInformaticsSelected ? "not-show" : "informatics-lista-esperienze"}>
            {data.map((item,index) => (
                <div key={index} className="informatics-single-item" style={{fontSize: "18px"}}>
                    <p>item</p>
                </div>
            ))}
        </div>
    </div>
}

export default CompetenzeInfo;