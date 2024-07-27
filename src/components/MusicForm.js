import React, { useState } from 'react';
import { createMusic } from '../services/musicService';

const MusicForm = () => {
    const [albumId, setAlbumId] = useState('');
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('album_id', albumId);
        formData.append('title', title);
        formData.append('duration', duration);
        formData.append('genre', genre);
        if (image) {
            formData.append('image', image);
        }

        await createMusic(formData);

        // Clear form
        setAlbumId('');
        setTitle('');
        setDuration('');
        setGenre('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Music</h2>
            <div>
                <label>Album ID:</label>
                <input type="text" value={albumId} onChange={(e) => setAlbumId(e.target.value)} />
            </div>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Duration:</label>
                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit">Add Music</button>
        </form>
    );
};

export default MusicForm;
