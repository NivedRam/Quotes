import React from 'react'
import Quotes from './Quotes'
import { Route,BrowserRouter,Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Quotes></Quotes>}>

  </Route>
 </Routes>
 </BrowserRouter>
    
    </div>
   
   
    
  
  )
}

export default App