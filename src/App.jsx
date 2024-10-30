import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Header from './Maincomponents/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
          <Route path="/bordire/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
