import React, { useState } from 'react'
import youtube from './axios/youtube';
import VideoDeatils from './components/VideoDeatils';
import VideoList from './components/VideoList';
import SearchBar from './SearchBar'

const App = () => {
    const [video, setVideo] = useState([])
    const [selected, setSelected] = useState()
    const onTermSubmit = async (term) => {
        console.log(term);
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(res);
        setVideo(res.data.items)
        // setSelected(res.data.itmes[0])
    }
    const onTouch = (value) =>{
        console.log(value);
        setSelected(value)
    }
    return (
        <div className="ui contanier">
            <SearchBar onSubmit={onTermSubmit} />
            <VideoDeatils video={selected}/>
            <VideoList onTouch={onTouch} videos={video}/>
        </div>
    )
}

export default App
