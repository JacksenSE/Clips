import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import League from "./pages/League"
import Overwatch from "./pages/Overwatch"
import Valorant from "./pages/Valorant"
import Misc from "./pages/Misc"
import Upload from "./pages/Upload"
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
