import React from 'react'
import Song from "./Song"

function SongList({tracks, onAdd, onDelete}) {

 

    const allSongs = tracks.map((song)=>{
        return (
            <Song key={song.id} id={song.id} onDelete={onDelete} onAdd={onAdd} 
            song={song.song} artist={song.artist} image={song.image}
            onSetlist={false}/>
        )
    })

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {allSongs}
        </div>
        </>
    );
}

export default SongList;