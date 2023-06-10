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
    <Route path='/' component={<Home/>}/>
    <Route path='/League' component={<League/>}/>
    <Route path='/Overwatch' component={<Overwatch/>}/>
    <Route path='/Valorant' component={<Valorant/>}/>
    <Route path='/Misc' component={<Misc/>}/>
    <Route path='/Upload' component={<Upload/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
