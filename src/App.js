import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import FamousQuotes from './components/FamousQuotes';
import Home from './components/Home';
// import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/FamousQuotes">FamousQuotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FamousQuotes" element={<FamousQuotes />} />

        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </>
    // <div className="App">
    //   <div className="quoteDiv">
    //   </div>
    //   <div className="calcuDiv">
    //   </div>
    // </div>
  );
}

export default App;
