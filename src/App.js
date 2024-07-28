import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import MusicPage from './pages/MusicPage';


const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4 flex justify-center space-x-8">
          <Link 
            to="/" 
            className="text-lg text-gray-700 hover:text-gray-900 hover:underline"
          >
            Albums
          </Link>
          <Link 
            to="/music" 
            className="text-lg text-gray-700 hover:text-gray-900 hover:underline"
          >
            Music
          </Link>
        </nav>
        <div className="bg-white shadow-md rounded p-6">
          <Routes>
            <Route path="/" element={<AlbumPage />} />
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
