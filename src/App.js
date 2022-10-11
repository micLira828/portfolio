import './App.css';
import { Route, Routes } from "react-router-dom";
// We will create these two pages in a moment
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    
    <Routes>
   
        <Route path="/" element={<Home/>}>
        {/*<Route index element={<Home />} />*/}
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    
    </Routes>
    
     
  
  );
}

export default App;
