import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FootBar from './components/FootBar';
import ConnectForm from './components/ConnectForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<>hello About</>} />
        <Route path='/portfolio' element={<>helloportfolio</>} />
        <Route path='/connectForm' element={<>hello contact form</>} />
      </Routes>

      <ConnectForm />
      <FootBar />
    </Router>
  );
}

export default App;
