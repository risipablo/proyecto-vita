

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./components/home/home"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
