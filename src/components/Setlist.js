import React from 'react'
import Song from "./Song"
function Setlist({setlist, onRemove}) {

    const allSongs = setlist.map((song)=>{
        
        return (
            <Song key={`setlist-${song.id}`} onRemove={onRemove} artist={song.artist} 
            song={song.song} image={song.image} onSetlist={true}
            onAdd={songCheck} id={song.id}/>
        )
    })

    function songCheck(e){
        console.log(e)
    }

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {allSongs}
        </div>
        </>
    );
}

export default Setlist;