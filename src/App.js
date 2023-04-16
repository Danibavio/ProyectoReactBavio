
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Aca iran todos los productos'} />

    </div>
  );
}

export default App;
