import React, {useState} from "react"
import CommentsList from "./CommentsList"
import Button from "./Button"

function Details({videoData}){
    const [upvotes, setUpvotes] = useState(videoData.upvotes)
    const [downvotes, setDownvotes] = useState(videoData.downvotes)
    const [isComment, setIsComment] = useState(true)
    const [commentsToDisplay, setCommentsToDisplay] = useState(videoData.comments)
    
    
    function hadleLike(){
        const newnum = upvotes + 1
        setUpvotes(newnum)
    }

    function hadneDislike(){
        const newnum = downvotes + 1
        setDownvotes(newnum)
    }

    function handleHideComment(e){
        console.log("show comment")
        setIsComment(!isComment)
        
    }

    function handledelete(id){
        const newArray = commentsToDisplay.filter((comment)=>comment.id !== id)
        setCommentsToDisplay(newArray)
    }

    return(
        <div id="details" >
            <h1>{videoData.title}</h1>
            <p>{videoData.views + " Views | Uploaded " + videoData.createdAt}</p>
            <Button emoji="👍" num ={upvotes} handleClick={hadleLike} />
            <Button emoji="👎" num ={downvotes} handleClick={hadneDislike} />
            <button id = "commentHide" onClick ={(e)=> handleHideComment(e)}>{isComment ? "Hide Comments" : "Show Comments"}</button>
            {isComment ? <CommentsList handledelete={handledelete} commentsArray ={commentsToDisplay} /> : null}
        </div>
    )
}

export default Details;