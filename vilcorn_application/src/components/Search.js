import React from 'react'
import { useState } from 'react';
// import {FaLongArrowAltRight}from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  

  const allow = {
    color: "white"
  }

  const notAllowed = {
    color: "grey",
    border: "1px solid grey",
    cursor: "default",
  }

  const handleChange = (e) =>{
    let text = e.target.value

    if(text !== " "){
      // {alert("button abled")}

      setSearch(text);
      

    };
  };

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(search){
      setText(search)
      setSearch("")
    }
    

  }
  const activateButton  = (e)  =>{
    if( search === ""){
      return true
    }
    return false

  }

  return (
    <div>
      <form method="post" id="search" onSubmit={handleSubmit}>

      <input type="text" name="search" placeholder='search...' id="search" value={search} onChange={handleChange}/>
        <button type="submit" id="submit" disabled={activateButton()} onClick = { () =>{ console.log("clicked")}} style = {search.length > 1 ? allow: notAllowed }>search</button>

        {/* <button type="submit"><span id="button">{FaLongArrowAltRight}</span></button> */}
      </form>
      
    </div>
  )
}

export default Search
