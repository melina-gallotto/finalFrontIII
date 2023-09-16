
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Home, Contact, Detail, Favs } from "./Routes";
import { useContext } from "react";
import { ContextGlobal } from "./Components/Context/global.context";

export default function App() {

  const {theme} = useContext(ContextGlobal) 

  return (
    <div style={{backgroundColor: theme.background, color: theme.font}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}


