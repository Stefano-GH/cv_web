/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PDFGenerator from "./components/pdf_generator/PDFGenerator";


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {
  return <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="download_pdf" element={<PDFGenerator />}/>
    </Routes>

  </BrowserRouter>
}

export default App;