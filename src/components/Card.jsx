import React , {useEffect, useState }from 'react'

export const Card = ({data}) => {
   
  const [selectedRadio, setSelectedRadio] = useState('Europe')

  const ok = data.filter((country) => country.continents.includes(selectedRadio))

    return (
<>
      <div className="radioButton">
      <input type="radio" value="Europe" name="Continent"onChange={(e) => setSelectedRadio(e.target.value)}  /> Europe
      <input type="radio" value="Asia" name="Continent"onChange={(e) => setSelectedRadio(e.target.value)}  /> Asia
        <input type="radio" value="Africa" name="Continent" onChange={(e) => setSelectedRadio(e.target.value)} /> Africa
        <input type="radio" value="Oceania" name="Continent"onChange={(e) => setSelectedRadio(e.target.value)}  /> Oceania
        <input type="radio" value="North America" name="Continent"onChange={(e) => setSelectedRadio(e.target.value)} /> North America
        <input type="radio" value="South America" name="Continent"   onChange={(e) => setSelectedRadio(e.target.value)} /> South America
      </div>


<div className="cardsWrapper">


      {ok.map((data) => {


        {( Object.values(data.languages).forEach(element =>console.log( element)))}
 return (
    <div className="CountrieCard">
    <h2>{data.name.common}</h2>
    <img src={data.flags.png}></img>
    <p>Population : {data.population}</p>
    <p>Capital : {data.capital}</p>


    {/* <p>Language : {Object.values(data.forEach(element => {
      console.log(element)
    }))}</p> */}


    
<a target="_blank" href={data.maps.googleMaps}>Voir sur GoogleMaps</a>

    
    </div>
      )})
 } </div>
 </>
    )}
    
     
  
  
