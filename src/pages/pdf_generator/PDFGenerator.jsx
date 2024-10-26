/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./PDFGenerator.css";
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_5 = `#${process.env.REACT_APP_COLOR_5}`;
const COLOR_7 = 'grey';

const SMALL_FONT = '1.5em';
const TEXT_FONT = '2em';
const TITLE_FONT = '2.5em';


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const PDFGenerator = ( {data, photo} ) => {
    const pdfRef = useRef();
    const navigate = useNavigate();

    // Generazione del PDF
    const generatePDF = () => {
        const input = pdfRef.current;
        html2canvas(input, {
                scale: 3,
                useCORS: true
            }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = 210;
            const pageHeight = 297;
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            while (heightLeft > 0) {
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                position -= pageHeight;

                if (heightLeft > 0) {
                    pdf.addPage();
                    position = 0;
                }
            }

            pdf.save(`CV_${data.anagrafica.nome}${data.anagrafica.cognome}.pdf`);
        }).catch(error => {
            console.log("Errore durante la generazione del PDF: ", error);
        });
    };

    // Gestione del bottone HOME
    const goHome = () => {
        navigate("/cv_web");
    }


    return <div>
        <div ref={pdfRef} className="page-container" style={{ display:"flex", height:"265vh" }}>
            <div className="first-column">
                <div className="upper-wrapper" style={{ backgroundColor:`${COLOR_2}` }}></div>
                
                <div className="lower-wrapper" style={{ backgroundColor:`${COLOR_7}` }}>
                    <div className="contatti" style={{ color:`${COLOR_5}`, width:'100%' }}>
                        {data.anagrafica.contatti.map((item, index) => (
                            <div key={index} className="contatti-single-item">
                                <FontAwesomeIcon icon={item.font} style={{ fontSize:'1.5em', width: '50px' }}/>
                                <p style={{ fontSize:'1.5em', marginBottom:'0.5em' }}>{item.valore}</p>
                            </div>
                        ))}
                    </div>

                    <div className="divisore" style={{ backgroundColor:`${COLOR_5}` }}></div>

                    <div className="competenze-container" style={{ color:`${COLOR_5}` }}>
                        <h3 style={{ color: `${COLOR_5}`, fontSize:`${TITLE_FONT}` }}>COMPETENZE</h3>
                        <div>
                            {data.competenze.map((item, index) => (
                                <p key={index} style={{ fontSize:`${TEXT_FONT}`, marginBottom:"7px" }}>• {item.nome}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="photo-wrapper" style={{ backgroundImage:`url(${photo})`, border:`3px solid ${COLOR_7}` }}></div>
            </div>

            <div className="second-column">
                <div className="name-wrapper" style={{ color:`${COLOR_3}` }}>
                    <h2>{data.anagrafica.nome} {data.anagrafica.cognome}</h2>
                </div>

                <div className="divisore-principale" style={{ backgroundColor:`${COLOR_2}` }}></div>

                <div className="container">
                    <h3 style={{ color:`${COLOR_2}`, fontSize:`${TITLE_FONT}`, marginBottom:'1em' }}>ESPERIENZE PROFESSIONALI</h3>
                    {data.lavoro.map((item, index) => (
                        <div key={index} style={{ marginBottom: "1.2em" }}>
                            {item.stagione ? (
                                <p style={{ fontSize:`${SMALL_FONT}` }}>{item.stagione} da {item.data_inizio} a {item.data_fine}</p>
                            ) : (
                                <p style={{ fontSize:`${SMALL_FONT}` }}>{item.data_inizio} - {item.data_fine ? item.data_fine : "Attuale"}</p>
                            )}
                            <h5 style={{ fontSize:`${TEXT_FONT}` }}>{item.manzione}</h5>
                            <p style={{ fontSize:`${SMALL_FONT}` }}>{item.azienda} | {item.sede}</p>
                            <div className="little-wrapper">
                                <p style={{ color:"rgb(58, 159, 221)", fontSize:`${SMALL_FONT}`}}>Settore:</p>
                                <p style={{ fontSize:`${SMALL_FONT}` }}>{item.settore}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="divisore-principale" style={{ backgroundColor:`${COLOR_2}` }}></div>

                <div className="container">
                    <h3 style={{ color:`${COLOR_2}`, fontSize:`${TITLE_FONT}`, marginBottom:'1em' }}>ISTRUZIONE E FORMAZIONE</h3>
                    {data.istruzione.map((item, index) => (
                        <div key={index} style={{marginBottom: "1.2em"}}>
                            <p style={{ fontSize:`${SMALL_FONT}` }}>{item.data_inizio} - {item.data_fine ? item.data_fine : "Attuale"}</p>
                            <h5 style={{ fontSize:`${TEXT_FONT}` }}>{item.corso}</h5>
                            <p style={{ fontSize:`${SMALL_FONT}` }}>{item.sede}</p>
                            {item.tesi && (
                                <div className="little-wrapper">
                                    <p style={{ color:"rgb(58, 159, 221)", fontSize:`${SMALL_FONT}` }}>Tesi:</p>
                                    <p style={{ fontSize:`${SMALL_FONT}` }}>{item.tesi}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="divisore-principale" style={{ backgroundColor:`${COLOR_2}` }}></div>

                <div className="container">
                    <h3 style={{ color:`${COLOR_2}`, fontSize:`${TITLE_FONT}`, marginBottom:'1em' }}>COMPETENZE LINGUISTICHE</h3>
                    <p style={{ fontSize:`${SMALL_FONT}`, marginBottom:'0.5em' }}><b>Italiano:</b> LINGUA MADRE</p>
                    <div className="lingue-list">
                        {data.lingue.map((item, index) => (
                            <div key={index} style={{ margin: "0 0.5em 0.7em 0" }}>
                                <div className="lingua-wrapper">
                                    <p style={{ fontSize:`${SMALL_FONT}` }}><b>{item.lingua}:</b></p>
                                    <p style={{ fontSize:`${SMALL_FONT}` }}>{item.nomeLivello}</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    {/* Stelle */}
                                    {/*[...Array(item.livello)].map((el, index) => (
                                        <span key={index} style={{ color: "gold", marginRight: "5px" }}>★</span>
                                    ))}
                                    {[...Array(6 - item.livello)].map((el,index) => (
                                        <span key={index} style={{ color: "lightGrey", marginRight: "5px" }}>★</span>
                                    ))*/}

                                    {/* Barre */}
                                    {[...Array(item.livello)].map((el,index) => (
                                        <div key={index} style={{ backgroundColor:"rgb(58, 159, 221)", height: "15px", width: "20%", margin: "0 5px 10px 0" }}></div>
                                    ))}
                                    {[...Array(6 - item.livello)].map((el,index) => (
                                        <div key={index} style={{ backgroundColor:"lightGrey", height: "15px", width: "20%", margin: "0 5px 10px 0" }}></div>
                                    ))}
                                </div>
                                <p style={{ fontSize:`${SMALL_FONT}`, marginBottom: '1em' }}>{item.dettaglioLivello}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
                
            </div>
        </div>


        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', marginBottom:'1em' }}>
            <button onClick={generatePDF} style={{ padding: '1em', backgroundColor: `${COLOR_2}`, color: `${COLOR_5}`, border: "none", borderRadius: "5px", cursor:"pointer", marginRight:'0.5em' }}>
                Scarica PDF
            </button>
            <button onClick={goHome} style={{ padding: '1em', backgroundColor: `${COLOR_7}`, color: `${COLOR_5}`, border: "none", borderRadius: "5px", cursor:"pointer", marginLeft:'0.5em' }}>
                Torna alla Home
            </button>
        </div>
    </div>
};

export default PDFGenerator;