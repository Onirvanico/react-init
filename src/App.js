import logo from './logo.svg';
import './App.css';
import ChooseComponent from './components.js/ChooseComponent';
import { useSelector } from 'react-redux';

function App() {
  let chosen = 4;
  const inputTextValue = useSelector(state => state.textInput.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ChooseComponent choice={chosen} />
        </div>
        <h3>Valor do store: { inputTextValue }</h3>
      </header>
    </div>
  );
}

export default App;
