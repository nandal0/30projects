import React from 'react'

const VideoItem = ({video,onTouch}) => {
    const image = video.snippet.thumbnails.medium.url;
    const title=video.snippet.title
    const time=video.snippet.publishedTime
    const Touch=()=>{
        onTouch(video)
    }
    return (
        <div className="d-flex justify-content-center">
            
            <div onClick={Touch} className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       
        <p className="card-text"><small className="text-muted">{time}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default VideoItem
