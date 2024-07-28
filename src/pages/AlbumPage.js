import React, { useState } from 'react';
import AlbumForm from '../components/Album/AlbumForm';
import AlbumList from '../components/Album/AlbumList';

const AlbumPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Albuns</h1>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <AlbumForm />
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Procurar por Album.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <AlbumList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default AlbumPage;
