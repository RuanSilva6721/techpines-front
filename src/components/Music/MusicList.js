import React, { useEffect, useState } from 'react';
import { getAllMusics, deleteMusic } from '../../services/musicService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MusicList = () => {
    const [musics, setMusics] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadMusics();
    }, []);

    const loadMusics = async () => {
        const response = await getAllMusics();
        setMusics(response.data);
    };

    const handleDelete = async (id) => {
        await deleteMusic(id);
        loadMusics();
    };

    const filteredMusics = musics.filter(music =>
        music.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Músicas</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Procurar por música"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border rounded w-full"
                />
            </div>
            <div className="overflow-y-auto max-h-80 p-4 bg-white rounded shadow-md">
                <ul className="list-none space-y-4">
                    {filteredMusics.map(music => (
                        <li key={music.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow">
                            <span className="text-gray-700">{music.title} - {music.genre} - {music.duration} mins</span>
                            
                            <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className="ml-4 text-red-500 cursor-pointer hover:text-red-600 transition duration-300" 
                                    onClick={() => handleDelete(music.id)}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MusicList;
