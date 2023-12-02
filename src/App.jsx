import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import PageNotFound from "./Routes/PageNotFound";
import './style.global.css'

function App() {

  return (
    <>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Dentist/:id' element={<Detail/>} />
        <Route path='/Favs' element={<Favs/>} />
        <Route path='*' element={<PageNotFound/>} />
     </Routes>
     <Footer/>
    </div>
    </>
  );
}

export default App;
