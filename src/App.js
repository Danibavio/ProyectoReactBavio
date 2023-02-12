
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Banner from "./components/Banner"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';


function App() {
  return(
    
    <BrowserRouter>
    <div className='App'>
      <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
      </Routes>
      </div>
    </div>
      </BrowserRouter>
      
  )
}

export default App;
