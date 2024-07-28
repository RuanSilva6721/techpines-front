import React, { useEffect, useState } from 'react';
import { getAllAlbums, deleteAlbum, getMusicByAlbum } from '../../services/AlbumService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AlbumList = ({ searchTerm }) => {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [songs, setSongs] = useState([]);

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

    const handleAlbumClick = async (albumId) => {
        if (albumId === selectedAlbumId) {
            setSelectedAlbumId(null);
            setSongs([]);
        } else {
            const response = await getMusicByAlbum(albumId);
            setSongs(response.data);
            setSelectedAlbumId(albumId);
        }
    };

    const filteredAlbums = albums.filter(album =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-y-auto max-h-80 p-4 bg-white rounded-lg shadow-lg">
            {filteredAlbums.length === 0 ? (
                <p className="text-center text-gray-500">Não há Albuns.</p>
            ) : (
                <ul className="list-none space-y-6">
                    {filteredAlbums.map(album => (
                        <li key={album.id} className="flex flex-col p-5 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img 
                                        src={album.imageUrl || process.env.PUBLIC_URL + '/img/music.png'} 
                                        alt={`${album.title} cover`} 
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <span 
                                            className="text-lg font-semibold text-gray-800 cursor-pointer" 
                                            onClick={() => handleAlbumClick(album.id)}
                                        >
                                            {album.title}
                                        </span>
                                        <div className="text-gray-600">{album.artist}</div>
                                    </div>
                                </div>
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className="ml-4 text-red-500 cursor-pointer hover:text-red-600 transition duration-300" 
                                    onClick={() => handleDelete(album.id)}
                                />
                                
                            
                            </div>
                            {selectedAlbumId === album.id && (
                                <div className="mt-3 pl-5">
                                    {songs.length > 0 ? (
                                        <ul className="list-disc text-gray-700">
                                            {songs.map(song => (
                                                <li key={song.id} className="my-1">{song.title}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500">Não há músicas.</p>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlbumList;
