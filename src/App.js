/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PDFGenerator from "./pages/pdf_generator/PDFGenerator";
import { useState } from "react";

import { dataIta, dataEng } from "./data/stefano/data";
import photo from "./data/icona.webp";


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {

  //////////////////////////////
  // Switch per lingua
  //////////////////////////////
  const [useEnglish, setUseEnglish] = useState(false);
  const data = useEnglish ? dataEng : dataIta;

  return <BrowserRouter>
  
      <Routes>
        <Route path="/cv_web" element={<Home data={data} useEnglish={useEnglish} setUseEnglish={setUseEnglish} />} />
        <Route path="/cv_web/download_pdf" element={<PDFGenerator data={data} photo={photo} />}/>
      </Routes>

  </BrowserRouter>
}

export default App;