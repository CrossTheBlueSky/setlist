import React from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [setlist, setSetlist] = React.useState([])
    const [tracks, setTracks] = React.useState([])

    React.useEffect(getSongs, [])


    function getSongs(){
        fetch(`http://localhost:3110/tracks`)
        .then(r=>r.json())
        .then(data=>{
            setTracks(data)
        })
    }

    function addSongHandler(song){

        setlist.some((e)=>e.id === song.id ) ? console.log("already on list")
        : setSetlist([...setlist, song])
    }


    function removeSongHandler(song){

        setSetlist(setlist.filter((ele)=> ele.song !== song.song))

    }
    
    function deleteSongHandler(song){
        console.log("attempted to delete")
        fetch(`http://localhost:3110/tracks/${song.id}`,{
            method: "DELETE"
        }).then(getSongs)
    }

    return(
        <div className="builder">
            <SongList tracks={tracks} onAdd={addSongHandler} onDelete={deleteSongHandler}/>
            <div className="vl"></div>
            <Setlist setlist={setlist} onRemove={removeSongHandler} />
        </div>
    );
}

export default SetlistBuilder;