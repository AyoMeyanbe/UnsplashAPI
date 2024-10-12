import React, { useState } from "react";
import './searchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if(term.length<1){
      setError("Search term cannot be null")
      return;
    }
    setError("");
    onSubmit(term);
  };
  return (
    <div className="searchDiv">
      <form>
      <input
        className="inputBar"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="Search image"
        
      />
      
      <button className="submitBtn" onClick={handleClick}>Find!</button>
    <p style={{color: "red"}}>{error}</p>
    </form>
    </div>
  );
}

export default SearchBar;
