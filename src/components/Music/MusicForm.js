import React, { useState, useEffect } from 'react';
import { createMusic } from '../../services/musicService';
import { getAllAlbums } from '../../services/AlbumService';

const MusicForm = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [albumId, setAlbumId] = useState('');
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await getAllAlbums();
            setAlbums(response.data);
        };

        fetchAlbums();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('duration', duration);
        formData.append('genre', genre);
        formData.append('album_id', albumId);

        await createMusic(formData);

        // Clear form
        setTitle('');
        setDuration('');
        setGenre('');
        setAlbumId('');
        window.location.reload()
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Adicionar Música</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duração (minutos):</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gênero:</label>
                <input 
                    type="text" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Album:</label>
                <select
                    value={albumId}
                    onChange={(e) => setAlbumId(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                    <option value="">Selecionar Album</option>
                    {albums.map(album => (
                        <option key={album.id} value={album.id}>
                            {album.title}
                        </option>
                    ))}
                </select>
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                Adicionar Música
            </button>
        </form>
    );
};

export default MusicForm;
