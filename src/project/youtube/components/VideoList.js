import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos,onTouch}) => {
    console.log(videos);
    const renderItme=videos.map((video)=>{
        return (<VideoItem onTouch={onTouch} key={video.id.videoId} video={video}/>)
    })
    return (
        <div>
            <div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">
{renderItme}
  </div>

        </div>
        </div>
    )
}

export default VideoList
