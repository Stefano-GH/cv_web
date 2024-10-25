/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import { useState } from "react";
import emailjs from "emailjs-com";
//import Modal from 'react-modal';

const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_5 = `#${process.env.REACT_APP_COLOR_5}`;
const COLOR_6 = `#${process.env.REACT_APP_COLOR_6}`;

const gridStyle = {
  backgroundColor: `${COLOR_2}`,
  color: `${COLOR_5}`,
  minHeight: "13em",
}


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Home = ( {data} ) => {

  //////////////////////////////
  // Competenze
  //////////////////////////////
  /*
  // Stato per la gestione della modale
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCompetenze, setSelectedCompetenze] = useState(null);

  // Funzione per aprire la modale
  const openModal = (competenza) => {
    setSelectedCompetenze(competenza);
    setModalIsOpen(true);
  };

  // Funzione per chiudere la modale
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCompetenze(null);
  };*/

  // gestione espansione del div per i dettagli
  const [expandedIndex, setExpandedIndex] = useState(Array(data.competenze.length).fill(false));
  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => {
      const newExpanded = [...expandedIndex];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    })
  }

  //////////////////////////////
  // Form
  //////////////////////////////
  // gestione form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_kal5pgm",     // service ID
      "template_2rmkg0r",    // template ID
      formData,
      "V6iEewt9sFcRb5GE8"    // public key or user ID
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Messaggio iniviato con successo!");
      },
      (error) => {
        console.log("FAILED...", error);
        console.log("Si è verificato un errore nell'invio del messaggio.")
      }
    );

    setFormData({
      name: "",
      email: "",
      message: ""
    })
  };


  return <div className="home-container">

    {/* Hero Section */}
    <section className="hero" style={{backgroundColor: `${COLOR_6}`}}>
      <div className="hero-content">
        <h2 style={{color: `${COLOR_3}`}}>Benvenuti nel mio sito!</h2>
        <p></p>
        <a href="#contact" className="btn" style={{backgroundColor:`${COLOR_3}`, color:`${COLOR_5}`}}>Contattami</a>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="about" style={{padding: "1em"}}>
      <h2>Chi Sono</h2>
      <p>{data.anagrafica.chi_sono}</p>
    </section>

    {/* Education Section */}
    <section id="education" className="education" style={{padding: "1em"}}>
      <h2 style={{marginBottom: "10px"}}>Istruzione</h2>
      <div className="education-grid">

        {data.istruzione.map((item, index) => (
          <div key={index} className="education-item" style={gridStyle}>
            <div className="education-card">

              {/* Fronte della carta*/}
              <div className="education-front-card" style={{backgroundImage:`url(${item.immagine})`}}>
                <div className="overlay"></div>
                <div className="content">
                  <h4 style={{marginBottom: "12px"}}>{item.corso}</h4>
                  <p>{item.tipo_corso}</p>
                </div>
                
              </div>

              {/*Retro della carta*/}
              <div className="education-back-card" style={{backgroundColor:`${COLOR_2}`}}>
                <p style={{marginBottom:"1em"}}><b>Sede:</b> {item.sede}</p>
                <p style={{marginBottom:"1em"}}><b>Periodo:</b> {item.data_inizio} - {item.data_fine ? item.data_fine : "In corso"}</p>
                {item.tesi && <p><b>Tesi:</b> {item.tesi}</p>}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="experience" style={{padding: "1em 1em 2.5em 1em"}}>
      <h2 style={{marginBottom: "10px"}}>Esperienza</h2>
      <div className="job-grid">

        {data.lavoro.map((item, index) => (
          <div key={index} className="job-item" style={gridStyle}>
            <div className="education-card">

              {/* Fronte della carta*/}
              <div className="education-front-card" style={{backgroundImage:`url(${item.immagine})`}}>
              <div className="overlay"></div>
              <div className="content">
                  <h4 style={{marginBottom: "12px"}}>{item.manzione}</h4>
                  <p>{item.azienda}</p>
                </div>
                
              </div>

              {/*Retro della carta*/}
              <div className="education-back-card">
                <p style={{marginBottom:"1em"}}><b>Settore:</b> {item.settore}</p>
                <p style={{marginBottom:"1em"}}><b>Sede:</b> {item.azienda} | {item.sede}</p>
                {item.stagione ? (
                    <p><b>Periodo:</b> {item.stagione} | {item.data_inizio} - {item.data_fine ? item.data_fine : "In corso"}</p>
                  ) : (
                    <p><b>Periodo:</b> {item.data_inizio} - {item.data_fine ? item.data_fine : "In corso"}</p>
                  )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="competenze" style={{ padding: "1em 1em 2.5em 1em", backgroundColor:`${COLOR_3}`, color:`${COLOR_5}` }}>
      <h2 style={{marginBottom:'1em'}}>Competenze</h2>
      <div className="competenze-grid">
        {data.competenze.map((item,index) => (
          <div key={index} className="competenze-item" onClick={() => handleExpand(index)} style={{backgroundColor:`${COLOR_5}`, color:`${COLOR_3}`}}>
            <h4 style={{cursor:'pointer', fontSize:'1.2em'}}>{item.nome}</h4>

            {expandedIndex[index] && item.tipo_competenza === "tecnica" && (
              <div className="competenze-dettagli">
                <p style={{marginBottom:'0.5em'}}><b>Linguaggi:</b> {item.competenze.join(', ')}</p>
                {item.dettagli?.length>0 && <p><b>Strumenti:</b> {item.dettagli.join(', ')}</p>}
              </div>
            )}

            {expandedIndex[index] && item.tipo_competenza === "linguistica" && (
              <div className="competenze-dettagli">
                <p style={{marginBottom:'0.5em'}}><b>Lingua Madre:</b> {item.competenze[0]}</p>
                {item.competenze?.length > 1 && (
                  <div style={{ display:'flex', gap:'0.5em' }}>
                    <p style={{ marginBottom:'0.5em' }}><b>Altre Lingue:</b></p>
                    {item.competenze.slice(1).map((lingua, indice) => (
                      <p key={indice} style={{ marginBottom:'0.5em' }}>
                        {lingua} ({item.dettagli[indice]})
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
            
          </div>
        ))}
      </div>

    {/*}
    <section id="skills" className="competenze" style={{ padding: "1em 1em 2.5em 1em", backgroundColor:`${COLOR_2}`, color:`${COLOR_5}` a}}>
      <h2 style={{marginBottom:"1em"}}>Competenze</h2>
      <div className="competenze-grid">
        {data.competenze.map((item, index) => (
          <div key={index} className="competenze-item" onClick={() => openModal(item)} style={{backgroundColor:`${COLOR_5}`, color:`${COLOR_3}`}}>
            <h4 style={{cursor:"pointer"}}>{item.nome}</h4>
          </div>
        ))}
      </div>*/}

      {/* Modal di dettaglio*/}
      {/*
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Dettaglio Competenze"
        style={{
          content: {
            backgroundColor: `${COLOR_6}`,
            borderRadius: '10px',
            margin: 'auto',
            maxWidth: '600px',
            padding: '2em'
          },
        }}
      >
      
        {selectedCompetenze && selectedCompetenze.tipo_competenza=="linguistica" && (
          <div>
            <h4 style={{marginBottom:"1em", fontSize:"1.5em"}}>{selectedCompetenze.nome}</h4>
            <p style={{marginBottom:"0.5em"}}><b>Lingua Madre:</b> {selectedCompetenze.competenze[0]}</p>
            <p style={{marginBottom:"0.5em"}}><b>Altre lingue:</b></p>
            {selectedCompetenze.competenze.slice(1).map((lingua, indice) => (
              <p style={{marginBottom:"0.5em"}}>{lingua} ({selectedCompetenze.dettagli[indice]})</p>
            ))}
            <button onClick={closeModal}
              style={{
                backgroundColor: `${COLOR_2}`,
                border: 'none',
                borderRadius: '5px',
                color: `${COLOR_5}`,
                cursor: 'pointer',
                padding: '0.5em 1em'
              }}
            >
              Chiudi
            </button>
          </div>
        )}
      </Modal>*/}
    </section>
    

    {/* Contact Section */}
    <section id="contact" className="contact" style={{padding: "1em", backgroundColor:`${COLOR_6}`}}>
      <h2 style={{marginBottom:"0.5em"}}>Contatti</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Il tuo nome" required/>
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="La tua email" required/>
        <label>Messaggio</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Scrivi il tuo messaggio qui" required></textarea>
        <button type="submit" className="btn" style={{backgroundColor: `${COLOR_2}`, color: `white`}}>Invia</button>
      </form>
    </section>

  </div>
}

export default Home;