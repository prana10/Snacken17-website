import Index from './presentation/pages/index'
import Error404 from './presentation/pages/Error404'
import Form from './presentation/pages/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './presentation/pages/Contact';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
