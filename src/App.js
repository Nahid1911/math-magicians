import { Route, Routes, Link } from 'react-router-dom';
// import './App.css';
import Calculator from './components/Calculator';
import FamousQuotes from './components/FamousQuotes';
import Home from './components/Home';
// import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <nav className="navBar">
        <h1>Math Magicians</h1>
        <ul className="navUl">
          <li className="naveLi">
            <Link to="/">Home</Link>
          </li>
          <li className="naveLi">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="naveLi">
            <Link to="/FamousQuotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/FamousQuotes" element={<FamousQuotes />} />
      </Routes>
    </>
  );
}

export default App;
