import React, { useState, useEffect } from 'react'
import axios from 'axios'

console.log(process.env)
const Search = (props) => {
    

    const[post, setPost] = useState(null)
    let end = Math.floor(new Date().getTime()/1000)
    let start = Math.floor((new Date().getTime()/1000) - 15780000);
    
    useEffect(() => {
      if((typeof props.longlat.latitude) == "number"){
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${+props.longlat.latitude}&lon=${+props.longlat.longitude}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {

            setPost(res.data.list[0].main.aqi)
        }) 
        .catch(err => console.log(err))
      }
    }, [+props.longlat.latitude, +props.longlat.longitude])


    
    return (
    <div>
      <h1>
          Average AQI for the past 6 months from today: {post}
      </h1>
    </div>
  )
}

export default Search