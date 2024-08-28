

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./components/home/home"
import { Personal } from "./components/staff/personal/personal"
import { Footer } from "./components/footer/footer"
import { DueñosDetails } from "./components/dueños/dueños/dueñosDetails"
import { Dueños } from "./components/dueños/dueños"
import { TopScroll } from "./components/other/topscroll"
import { Whatsapp } from "./components/other/whatsapp"



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="dueños" element={<Dueños />} />
        <Route path="/dueños/:id" element={ <DueñosDetails/> }/>
      </Routes>
      <TopScroll/>
      <Whatsapp/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
