/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import PDFGenerator from "./pages/pdf_generator/PDFGenerator";

import data from "./data/stefano/data";
import photo from "./data/icona.webp";


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {
  return <BrowserRouter>
    <Navbar data={data} />

      <Routes>
        <Route path="/cv_web" element={<Home data={data} />}/>
        <Route path="/cv_web/download_pdf" element={<PDFGenerator data={data} photo={photo} />}/>
      </Routes>

    <Footer data={data} />
  </BrowserRouter>
}

export default App;