/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Card.css";
import logo from "../../data/icona.webp";
import { DatiAnagrafici as data } from "../../data/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_1 = "#72BF78";


/*----------------------------------------
  CARD  STRUCTURE
  ----------------------------------------
*/
const Card = () => {

    return <div className="card">
        <div className="card-top">
            <h2>{data.nome} {data.cognome}</h2>
        </div>

        <div className="card-middle">
            <div className="horizontal-line" style={{backgroundColor:`${COLOR_1}`}}></div>
            <div className="image-container"style={{backgroundImage:`url(${logo})`}}></div>
            <div className="horizontal-line" style={{backgroundColor:`${COLOR_1}`}}></div>
        </div>

        <div className="card-bottom">
            {data.contatti.map((item, index) => (
                <div key={index} className="single-grid">
                    <FontAwesomeIcon icon={item.font} style={{fontSize: "3vh"}}/>
                    <p key={index}>{item.valore}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Card;