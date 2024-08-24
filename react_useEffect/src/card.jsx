import React from "react"

function Card({myname,list,details}){
    //function Card(props){}
    //console.log(props)
    
    return(
        <>
          This is a card
          <div>{myname}</div>
          <h1>{details.gender}</h1>
          <h1>{details.name?.first}</h1>
          <ul>
          {list.map((l) => (
            <li key={l}>{l}</li>
          ))}
          </ul>
        </>
    )
};

export default Card;