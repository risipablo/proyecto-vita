

import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./components/home/home"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Home/>
      </BrowserRouter>
    </>
  )
}

export default App
