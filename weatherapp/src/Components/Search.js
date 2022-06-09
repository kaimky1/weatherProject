import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Search = (props) => {
    
    const[post, setPost] = useState(null)
    console.log("This is the longitude", props.longlat.longitude)
    console.log("This is the latitude", props.longlat.latitude)
    let end = (new Date().getTime()/1000)
    let start = (new Date().getTime()/1000) - 15780000;
    console.log(start)
    
    

    
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${+props.longlat.latitude}&lon=${+props.longlat.longitude}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            console.log(res.data.list[0].main.aqi)
            setPost(res.data.list[0].main.aqi)
        }) 
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