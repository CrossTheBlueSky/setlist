import React from 'react'

function Song({id, song, image, artist, onAdd, onRemove, onDelete, onSetlist}) {

    const songObj = {
        id: id,
        song: song,
        image: image,
        artist: artist
    }

    function addClick(e){


        onAdd(songObj)

    }

    function deleteClick(e){
        onDelete(songObj)
    }

    function removeClick(e){
        onRemove(songObj)
    }



    return(
        <div className="song">
            <img src={image} alt="album art"/>
            <div className="song-info">
                <h3>{song}</h3>
                <h4>{artist}</h4>
            </div>
            <button onClick={onSetlist ? console.log("already on list"): addClick}>Add</button>
            <button onClick={onSetlist ?  removeClick : deleteClick}>X</button>
        </div>
    );
}

export default Song;