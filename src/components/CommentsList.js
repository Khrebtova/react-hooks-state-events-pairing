import React from "react"
import Comment from "./Comment"

function CommentsList({commentsArray, handledelete}){
    
    const list = commentsArray.map((comment) => {
        return(
            <Comment 
            key={comment.id} 
            handledelete={handledelete} 
            id ={comment.id}             
            user ={comment.user} 
            text ={comment.comment}
            />
        )
    })
    
    return(
        <div id ="comments list" >
            <h2>{commentsArray.length + " Comments"}</h2>
            {list}
        </div>
    )
}

export default CommentsList;