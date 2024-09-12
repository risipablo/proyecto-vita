

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./components/home/home"
import { Footer } from "./components/footer/footer"
import { DueñosDetails } from "./components/dueños/dueños/dueñosDetails"
import { Dueños } from "./components/dueños/dueños"
import { TopScroll } from "./components/other/topscroll"
import { Whatsapp } from "./components/other/whatsapp"
import { Contacto } from "./components/contacto/contacto"
import { Personal } from "./components/staff/personal/personal"


function App() {


  return (
    <>
    

        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/personal" element={<Personal/>} />
          <Route path="dueños" element={<Dueños />} />
          <Route path="/dueños/:id" element={ <DueñosDetails/> }/>
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <TopScroll/>
        <Whatsapp/>
        <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App
