import React, { useState, useEffect } from 'react';

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  const apikey = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=405cefcc978e32b8a2ecdf2aad8f7d72hash=31ed7e45b921f4124e739ea91c00d448';
  
  useEffect(()=>{
        fetch(apikey).then(res=>res.json()).then(res=>{
            setHeroes(res.characters.name);
            localStorage.setItem("heroes", res.value);
        })
    });

    return (
        <div>
            <h1>Heroes</h1>
            <p>{heroes}</p>
        </div>
      );
}

export default Heroes;