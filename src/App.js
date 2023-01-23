
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Banner from "./components/Banner"

function App() {
  return(
    <>
    <NavBar/>

    <Banner title="Fulvito"/>
    <ItemListContainer greeting={"Camisetas"}/>
    </>
  )
}

export default App;
