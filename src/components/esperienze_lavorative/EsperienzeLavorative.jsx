/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./EsperienzeLavorative.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { EsperienzeProfessionali as data } from "../../data/Data";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_1 = "#72BF78";


/*----------------------------------------
  ESPERIENZE LAVORATIVE  STRUCTURE
  ----------------------------------------
*/
const EsperienzeLavorative = () => {
    const [isWorkSelected, setIsWorkSelected] = useState(true);

    // Gestione stile del titolo
    const [isHovered, setIsHovered] = useState(false);
    const workStyle = {
        cursor: !isHovered ? "default" : "pointer",
        fontSize: "35px",
        fontWeight: "bold",
        textDecoration: !isHovered ? "" : "underline"
    }

    return <div className="lavoro-main-container">
        <div className="lavoro-title-wrapper">
            {!isWorkSelected ? 
            <FontAwesomeIcon icon={faCaretDown} style={{fontSize: "3vh"}}/>
            : <FontAwesomeIcon icon={faCaretUp} style={{fontSize: "3vh"}}/>
            }
            <p style={workStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsWorkSelected(!isWorkSelected)}>
                Esperienze Professionali
            </p>
        </div>

        <div className={!isWorkSelected ? "not-show" : "lavoro-lista-esperienze"}>
            {data.map((item,index) => (
                <div key={index} className="lavoro-single-item" style={{fontSize: "18px"}}>
                    <div key={index} className="work-dates">
                        {item.stagione ?(
                            <p>{item.stagione} da {item.dataInizio} a {item.dataFine ? item.dataFine : "oggi"}</p>
                        ) : (
                        <p>Da {item.dataInizio} a {item.dataFine ? item.dataFine : "oggi"}</p>
                        )}
                    </div>
                    <div className="work-details">
                        <h4 style={{fontSize: "23px"}}>{item.manzione}</h4>
                        <p>{item.azienda}, {item.luogo}</p>
                        <div className="settore-wrapper">
                            <p style={{color:`${COLOR_1}`, marginRight: "1vh"}}>Settore</p>
                            <p>{item.settore}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
}

export default EsperienzeLavorative