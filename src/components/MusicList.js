import React, { useEffect, useState } from 'react';
import { getAllMusics, deleteMusic } from '../services/musicService';

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
        <div>
            <h2>Music List</h2>
            <ul>
                {musics.map(music => (
                    <li key={music.id}>
                        {music.title} - {music.genre}
                        <button onClick={() => handleDelete(music.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicList;
