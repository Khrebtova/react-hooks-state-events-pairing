import React from "react"
import video from "../data/video.js";
import Details from "./Details.js";
import Video from "./Video"



function App() {

  
  return (
    <div className="App">
      <Video videoData={video} />
      <Details videoData ={video}/>
    </div>
  );
}

export default App;
