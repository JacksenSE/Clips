import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import League from "./League"
import Overwatch from "./Overwatch"
import Valorant from "./Valorant"
import Misc from "./Misc"
import Upload from "./Upload"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/League' element={<League/>}/>
    <Route path='/Overwatch' element={<Overwatch/>}/>
    <Route path='/Valorant' element={<Valorant/>}/>
    <Route path='/Misc' element={<Misc/>}/>
    <Route path='/Upload' element={<Upload/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
