import React from 'react';
import MusicForm from '../components/Music/MusicForm';
import MusicList from '../components/Music/MusicList';

const MusicPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Music</h1>
      <MusicForm albumId={1} /> {/* Passe o ID do álbum ao qual você deseja adicionar músicas */}
      <MusicList />
    </div>
  );
};

export default MusicPage;
