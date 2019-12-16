import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"

export default function Factlist() {

    const [facts, setfacts] = useState(['test']);
    useEffect(() => {
        
      fetch('http://localhost:1317/factio/factlist', {
      method: 'GET',
      }).then((res,err)=>{
          if(err){
          console.log(err)
          return
          }
          return res.json();
      }).then((rjson)=>{
          console.log(rjson)
          setfacts(rjson.result)
      })    
    }, []);
    return (<>
    {renderfacts(facts)}
    </>
    )
  }
  
  function renderfacts(e) {
      console.log(e)
      if(e==undefined){
          return
      }
  return e.map((item, index) => {
  return <div key={index}><Link to={"/fact?fact="+item} >{item}</Link><br/></div>});
  
}
