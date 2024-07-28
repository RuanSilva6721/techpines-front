import React, { useState } from 'react';
import { createAlbum } from '../../services/AlbumService';

const AlbumForm = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('genre', genre);

        await createAlbum(formData);

        // Clear form
        setTitle('');
        setArtist('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Adicionar Album</h2>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Titulo:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Artista:</label>
                <input 
                    type="text" 
                    value={artist} 
                    onChange={(e) => setArtist(e.target.value)} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Gênero:</label>
                <input 
                    type="text" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Adicionar Album
            </button>
        </form>
    );
};

export default AlbumForm;
