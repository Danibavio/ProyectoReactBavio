
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { CartProvider } from './context/CartContext';
import Carrito from './components/Cart';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/editorial/:editorialId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:itemId' element= {<ItemDetailContainer/>}/>
          <Route exact path='/carrito' element={<Carrito/>}/>
          
        </Routes>
      </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
