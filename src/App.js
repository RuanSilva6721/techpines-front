import React from 'react';
import AlbumList from './components/AlbumList';
import MusicList from './components/MusicList';
import AlbumForm from './components/AlbumForm';
import MusicForm from './components/MusicForm';

const App = () => {
    return (
        <div>
            <h1>Album and Music Management</h1>
            <AlbumForm />
            <MusicForm />
            <AlbumList />
            <MusicList />
        </div>
    );
};

export default App;
