import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Provider from "./components/Provider/Provider";
function App() {
  return (
    <div className="App">
      <Provider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Provider>

      {/*  <ItemListContainer greeting="Yesica Chui Chalco"></ItemListContainer> */}

    </div>
  );
}

export default App;
