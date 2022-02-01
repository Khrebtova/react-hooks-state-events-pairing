import React from "react"

function Video({videoData}){
    return(
        <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
    )
}

export default Video;