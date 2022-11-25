import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'
import Box from './components/Box/Box'
import UsersContainer from './components/UsersContainer/UsersContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Button label="haz click aqui"/>
      <Box>
        <span>
          esto es un elemento hijo
        </span>
      </Box>
      <UsersContainer></UsersContainer>

    </div>
  );
}

export default App;
