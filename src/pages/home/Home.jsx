/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import Card from "../../components/card/Card";
import EsperienzeLavorative from "../../components/esperienze_lavorative/EsperienzeLavorative";
import Istruzione from "../../components/istruzione/Istruzione";
import Certificazioni from "../../components/certificazioni/Certificazioni";
import CompetenzeInfo from "../../components/competenze_informatiche/CompetenzeInfo";
import Footer from "../../components/footer/Footer";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_1 = "#72BF78";
const COLOR_3 = "#D3EE98";


/*----------------------------------------
  HOME  STRUCTURE
  ----------------------------------------
*/
const Home = () => {
    return <div>
        <div className="card-container" style={{backgroundColor:`${COLOR_1}`}}>
            <Card />
        </div>
        
        <div className="data-container">
            <EsperienzeLavorative />
            <Istruzione />
        </div>

        <div className="certication-container" style={{backgroundColor:`${COLOR_3}`}}>
            <Certificazioni />
            <CompetenzeInfo />
        </div>

        <Footer />
    </div>
}

export default Home;