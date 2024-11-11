import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import CocinaHome from './pages/kitchen/home';
import CosinaAbout from './pages/kitchen/about';
import CosinaCatering from './pages/kitchen/catering';

function App() {
  return (
    <div className="App">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      <BrowserRouter>
        {/* Pages */}
        <Routes>
          {/* Home Page */}
          <Route path='/' element={<CocinaHome/>} />

          {/* Rosita's Kitchen */}
          <Route path='/kitchen' element={<CocinaHome/>} />
          <Route path='/kitchen/about' element={<CosinaAbout/>} />
          <Route path='/kitchen/catering' element={<CosinaCatering/>} />

          {/* Rosita's Market */}

          {/* Rosita's Events */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
