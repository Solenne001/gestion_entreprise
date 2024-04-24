import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inscriptions from './Components/Pages/Inscriptions/Inscriptions'
import Connexions from './Components/Pages/Connexions/Connexions'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Inscriptions/>}/>
      <Route path='/Connect' element={<Connexions/>}/>
    </Routes>
   </BrowserRouter> 
    
  )
}

export default App