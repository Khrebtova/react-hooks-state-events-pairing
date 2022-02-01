import React, {useState} from "react"
import Button from "./Button"

function Comment({id, user, text, handledelete}){
    const[likes, setLikes]  = useState(0)
    const [dislikes, setDislikes] = useState(0)
    function handleClick(e){
        console.log(e.target.className)
        if(e.target.className === "like"){
            setLikes(likes+1)
        }else{
            setDislikes(dislikes+1)
        }
    }
    
    return(
        <div className="comment" id = {id}>
            <h3>{user}</h3>
            <p>{text}</p>
            <Button emoji="👍" num ={likes} handleClick={handleClick} />
            <Button emoji="👎" num ={dislikes} handleClick={handleClick} />  
            <button onClick = {()=>handledelete(id)}>X</button>
        </div>
    )
}

export default Comment;