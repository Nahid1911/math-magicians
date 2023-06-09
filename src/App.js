import './App.css';
import Calculator from './components/Calculator';
import FamousQuotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <div className="quoteDiv">
        <FamousQuotes />
      </div>
      <div className="calcuDiv">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
