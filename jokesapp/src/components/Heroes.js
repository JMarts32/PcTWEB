import React, { useState, useEffect } from 'react';

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  
  useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("hero") === null) {
            setHeroes("Loading...")
        } else {
            setHeroes(localStorage.getItem("hero"));
        }
    } else{
        const fetchHeroes = async () => {
            const ts = "1621736672";
            const pubK = "405cefcc978e32b8a2ecdf2aad8f7d72";
            const hash = "6cc52aee3de44b8724628d465cbb331b"
            const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${pubK}&hash=${hash}`;
    
            try{
                const res = await fetch(URL);
                const data = await res.json();
                setHeroes(data.data.results);
    
                localStorage.setItem("heroes", JSON.stringify(data.data.results));
            } catch(err) {
                console.log(err);
            }
        };
        fetchHeroes();
    }
    }, []);


    return (
        <div>
            <h1>Marvel Heroes</h1>
            <ul>
                {heroes.map(hero => (
                    <li>
                        <img src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt={hero.name} />
                        <p>{hero.name}</p>
                    </li>
                ))}
            </ul>
        </div>
      );
}

export default Heroes;