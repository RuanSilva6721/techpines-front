import React, { useState } from 'react';
import { createAlbum } from '../services/AlbumService';

const AlbumForm = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('release_date', releaseDate);
        if (image) {
            formData.append('image', image);
        }

        await createAlbum(formData);

        // Clear form
        setTitle('');
        setArtist('');
        setReleaseDate('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Album</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Artist:</label>
                <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>
            <div>
                <label>Release Date:</label>
                <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit">Add Album</button>
        </form>
    );
};

export default AlbumForm;
