/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./PDFGenerator.css";
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from "../../data/icona.webp";
import { DatiAnagrafici, informaticsData, EsperienzeProfessionali, educationData, lingueData } from "../../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const PDFGenerator = () => {
    const pdfRef = useRef();  // Riferimento alla sezione della pagina che vogliamo convertire in PDF
    const navigate = useNavigate();

    // Generazione del PDF
    const generatePDF = () => {
        const input = pdfRef.current;  // Sezione da convertire in PDF
        html2canvas(input, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');  // Converti il contenuto in immagine
            const pdf = new jsPDF('p', 'mm', 'a4');  // Crea il documento PDF
            const imgWidth = 210;  // Larghezza del PDF A4 in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;  // Calcola l'altezza mantenendo le proporzioni

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);  // Aggiungi l'immagine al PDF
            pdf.save('pagina.pdf');  // Salva il PDF
        }).catch(error => {
            console.log("Errore durante la generazione del PDF: ", error);
        });
    };

    // Generazione della prima lettera maiuscola nel testo
    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    // Gestione del bottone HOME
    const goHome = () => {
        navigate("/");
    }


    return <div>
        <div ref={pdfRef} className="page-container">
            <div className="first-column">
                <div className="upper-wrapper"></div>
                
                <div className="lower-wrapper">
                    <div className="contatti">
                        {DatiAnagrafici.contatti.map((item, index) => (
                            <div key={index} className="contatti-single-item">
                                <FontAwesomeIcon icon={item.font} style={{width: "20px"}}/>
                                <p>{item.valore}</p>
                            </div>
                        ))}
                    </div>

                    <div className="divisore"></div>

                    <div className="competenze-container">
                        <h3 style={{ color: "white" }}>COMPETENZE TECNICHE</h3>
                        <ul>
                            {informaticsData.map((item, index) => (
                                <li key={index} style={{marginBottom:"7px"}}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="photo-wrapper" style={{backgroundImage:`url(${logo})`}}></div>
            </div>

            <div className="second-column">
                <div className="name-wrapper">
                    <h2>{DatiAnagrafici.nome} {DatiAnagrafici.cognome}</h2>
                </div>

                <div className="divisore-principale"></div>

                <div className="container">
                    <h3>ESPERIENZE LAVORATIVE E PROFESSIONALI</h3>
                    {EsperienzeProfessionali.map((item, index) => (
                        <div key={index} style={{marginBottom: "15px"}}>
                            {item.stagione ? (
                                <p style={{fontSize:`15px`}}>{capitalizeFirstLetter(item.stagione)} da {item.dataInizio} a {item.dataFine}</p>
                            ) : (
                                <p style={{fontSize:`15px`}}>{capitalizeFirstLetter(item.dataInizio)} - {item.dataFine ? capitalizeFirstLetter(item.dataFine) : "Attuale"}</p>
                            )}
                            <h5 style={{fontSize:"16px"}}>{item.manzione}</h5>
                            <p>{item.azienda} | {item.luogo}</p>
                            <div className="little-wrapper">
                                <p style={{color:"rgb(58, 159, 221)"}}>Settore:</p>
                                <p>{item.settore}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="divisore-principale"></div>

                <div className="container">
                    <h3>ISTRUZIONE E FORMAZIONE</h3>
                    {educationData.map((item, index) => (
                        <div key={index} style={{marginBottom: "15px"}}>
                            <p style={{fontSize:"15px"}}>{capitalizeFirstLetter(item.dataInizio)} - {item.dataFine ? capitalizeFirstLetter(item.dataFine) : "Attuale"}</p>
                            <h5 style={{fontSize:"16px"}}>{item.corso}</h5>
                            <p>{item.universita}</p>
                            {item.tesi ? (
                                <div className="little-wrapper">
                                    <p style={{color:"rgb(58, 159, 221)"}}>Tesi:</p>
                                    <p>{item.tesi}</p>
                                </div>
                            ) : ""
                            }
                        </div>
                    ))}
                </div>

                <div className="divisore-principale"></div>

                <div className="container">
                    <h3>COMPETENZE LINGUISTICHE</h3>
                    <p style={{marginBottom:"10px"}}><b>Italiano:</b> LINGUA MADRE</p>
                    <div className="lingue-list">
                        {lingueData.map((item, index) => (
                            <div key={index} style={{margin: "0 15px 10px 0"}}>
                                <div className="lingua-wrapper">
                                    <p><b>{item.lingua}:</b></p>
                                    <p>{item.nomeLivello}</p>
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
                                        <div key={index} style={{ backgroundColor:"rgb(58, 159, 221)", height: "15px", width: "20%", marginRight: "5px" }}></div>
                                    ))}
                                    {[...Array(6 - item.livello)].map((el,index) => (
                                        <div key={index} style={{ backgroundColor:"lightGrey", height: "15px", width: "20%", marginRight: "5px" }}></div>
                                    ))}
                                </div>
                                <p>{item.dettaglioLivello}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>


        <div>
            <button onClick={generatePDF} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#74b9ff", color: "white", border: "none", borderRadius: "5px" }}>
                Scarica PDF
            </button>
            <button onClick={goHome} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#72BF78", color: "white", border: "none", borderRadius: "5px" }}>
                Home
            </button>
        </div>
    </div>
};

export default PDFGenerator;