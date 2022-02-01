import React from "react"

function Button ({emoji, num, handleClick}){
    return (
    <button className= {emoji==="👍" ? "like" : "dislike"} onClick ={(e)=> handleClick(e)}>{num + emoji}</button>
    )    
}

export default Button;