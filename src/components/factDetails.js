import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

export default function FactDetail() {

    const [fact, setfact] = useState(null);
    const urlParams = new URLSearchParams(window.location.search);
    useEffect(() => {
        fetch('http://localhost:1317/factio/'+urlParams.get('fact')+'/getFact', {
            method: 'GET',
          }).then((res,err)=>{
            if(err){
              console.log(err)
              return
            }
            return res.json();
          }).then((rjson)=>{
            console.log(rjson)
            setfact(rjson.result)
          })
    }, []);
    if(fact == null){
        return <Link to="/">Back to Home</Link>
    }
    return (<>
    <h1>Title: {fact.title}</h1>
    <p>Place: {fact.place}</p>
    <p>Time: {fact.time}</p>
    <p>Creator: {fact.creator}</p>
    <p>Description: {fact.description}</p>
    <p>price: {fact.price[0].amount} {fact.price[0].denom}</p>
    <p>stakers: </p>
    {renderStakers(fact.delegators)}
        <Link to="/">Back to Home</Link>
    </>
    )
}

function renderStakers(stakers) {
    console.log(stakers)
    if(stakers==undefined){
        return
    }
return stakers.map((item, index) => {
return <p key={index}>{item}</p>});
}



