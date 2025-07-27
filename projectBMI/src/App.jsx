import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helper from './header.jsx';
import Home from './home.jsx';
import Calculate from './content.jsx';

function App() {
  return (
    <Router>
      <div>
        <Helper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
