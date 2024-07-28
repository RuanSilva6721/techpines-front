import React, { useEffect, useState } from 'react';
import { getAllMusics, deleteMusic } from '../../services/musicService';

const MusicList = () => {
    const [musics, setMusics] = useState([]);

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

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Music List</h2>
            <ul className="list-disc pl-5 space-y-2">
                {musics.map(music => (
                    <li key={music.id} className="flex justify-between items-center">
                        <span>{music.title} - {music.genre} - {music.duration} mins</span>
                        <button 
                            className="ml-4 bg-red-500 text-white px-2 py-1 rounded" 
                            onClick={() => handleDelete(music.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicList;
