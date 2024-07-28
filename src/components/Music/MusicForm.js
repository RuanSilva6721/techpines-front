import React, { useState } from 'react';
import { createMusic } from '../../services/musicService';

const MusicForm = ({ albumId }) => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('duration', duration);
        formData.append('genre', genre);
        formData.append('album_id', albumId);
        if (file) {
            formData.append('file', file);
        }

        await createMusic(formData);

        // Clear form
        setTitle('');
        setDuration('');
        setGenre('');
        setFile(null);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Add Music</h2>
            <div>
                <label className="block mb-1">Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full border px-2 py-1"
                />
            </div>
            <div>
                <label className="block mb-1">Duration (minutes):</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)} 
                    className="w-full border px-2 py-1"
                />
            </div>
            <div>
                <label className="block mb-1">Genre:</label>
                <input 
                    type="text" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    className="w-full border px-2 py-1"
                />
            </div>
            <div>
                <label className="block mb-1">File:</label>
                <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])} 
                    className="w-full border px-2 py-1"
                />
            </div>
            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Music
            </button>
        </form>
    );
};

export default MusicForm;
