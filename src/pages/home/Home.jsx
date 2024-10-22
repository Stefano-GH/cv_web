/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";

//const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_1 = "#FF6500";
const COLOR_2 = "#1E3E62";
const COLOR_3 = "#0B192C";
const COLOR_4 = "#000000";

const gridStyle = {
  backgroundColor: `${COLOR_2}`,
  color: `white`,
  minHeight: "10em",
}


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Home = ( {data} ) => {
  return <div className="home-container">

    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h2 style={{color: `${COLOR_3}`}}>Benvenuti nel mio sito!</h2>
        <p></p>
        <a href="#contact" className="btn" style={{backgroundColor: `${COLOR_2}`, color: `white`}}>Contattami</a>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="about" style={{padding: "1em"}}>
      <h2>Chi Sono</h2>
      <p>{data.anagrafica.chi_sono}</p>
    </section>

    {/* Education Section */}
    <section id="education" className="education">
      <h2 style={{marginBottom: "10px"}}>Istruzione</h2>
      <div className="education-grid">
        {data.istruzione.map((item, index) => (
          <div key={index} className="education-item" style={gridStyle}>
            <div className="education-card">

              {/* Fronte della carta*/}
              <div className="education-front-card" style={{padding: "1em"}}>
                <h4 style={{marginBottom: "12px"}}>{item.corso}</h4>
                <p>{item.tipo_corso}</p>
                <p>{item.data_inizio} - {item.data_fine ? item.data_fine : "In corso"}</p>
              </div>

              {/*Retro della carta*/}
              <div className="education-back-card" style={{backgroundImage: `url(${item.immagine})`}}>
                <div className="overlay"></div>
                <div className="content">
                  <p>Prova</p>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="experience" style={{padding: "1em"}}>
      <h2>Esperienza</h2>
      <div className="job-grid">
        {data.lavoro.map((item, index) => (
          <div key={index} className="job-item">{item.manzione}</div>
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact" style={{padding: "1em"}}>
      <h2>Contatti</h2>
      <form>
        <label>Nome</label>
        <input type="text" placeholder="Il tuo nome" />
        <label>Email</label>
        <input type="email" placeholder="La tua email" />
        <label>Messaggio</label>
        <textarea placeholder="Scrivi il tuo messaggio qui"></textarea>
        <button type="submit">Invia</button>
      </form>
    </section>

    {/* Footer */}
    <footer className="footer">
      <p>© 2024 {data.anagrafica.nome} {data.anagrafica.cognome}. Tutti i diritti riservati.</p>
    </footer>
  </div>
}

export default Home;