import React, { useEffect, useState } from 'react';
import { getAllAlbums, deleteAlbum } from '../services/AlbumService';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        const response = await getAllAlbums();
        setAlbums(response.data);
    };

    const handleDelete = async (id) => {
        await deleteAlbum(id);
        loadAlbums();
    };

    return (
        <div>
            <h2>Album List</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title} - {album.artist}
                        <button onClick={() => handleDelete(album.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
