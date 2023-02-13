
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return(
    
    <BrowserRouter>
    <div className='App'>
      <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </div>
    </div>
      </BrowserRouter>
      
  )
}

export default App;