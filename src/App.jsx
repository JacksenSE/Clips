import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import './form.css'
import Home from "./components/Home"
import League from "./pages/League"
import Overwatch from "./pages/Overwatch"
import Valorant from "./pages/Valorant"
import Misc from "./pages/Misc"
import Upload from "./pages/Upload"
import ApexLegends from "./pages/ApexLegends"
import BattleBitRemastered from "./pages/BattleBitRemastered"
import CounterStrike2 from './pages/CounterStrike2'
import Rainbow6Siege from './pages/Rainbow6Siege'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/League' element={<League/>}/>
    <Route path='/Overwatch' element={<Overwatch/>}/>
    <Route path='/Valorant' element={<Valorant/>}/>
    <Route path='/ApexLegends' element={<ApexLegends/>}/>
    <Route path='/BattleBitRemastered' element={<BattleBitRemastered/>}/>
    <Route path='/CounterStrike2' element={<CounterStrike2/>}/>
    <Route path='/Rainbow6Siege' element={<Rainbow6Siege/>}/>
    <Route path='/Misc' element={<Misc/>}/>
    <Route path='/Upload' element={<Upload/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
