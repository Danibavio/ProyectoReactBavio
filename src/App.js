
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/editorial/:editorialId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:itemId' element= {<ItemDetailContainer/>}/>
          
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
