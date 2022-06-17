import React, { useState, useEffect } from 'react'
import axios from 'axios'

console.log(process.env)
const Search = (props) => {
    

    const[post12, setPost12] = useState("")
    const[post6, setPost6] = useState("")
    const[post3, setPost3] = useState("")
    const[showMe12, setShowMe12] = useState(false)
    const[showMe6, setShowMe6] = useState(false)
    const[showMe3, setShowMe3] = useState(false)

    
    
    useEffect(() => {
      let end = Math.floor(new Date().getTime()/1000)
    let start = Math.floor((new Date().getTime()/1000) - 31560000);
      if((typeof props.longlat.latitude) == "number"){
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${+props.longlat.latitude}&lon=${+props.longlat.longitude}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {

            setPost12(res.data.list[0].main.aqi)
        }) 
        .catch(err => console.log(err))
      }
    }, [+props.longlat.latitude, +props.longlat.longitude])

    useEffect(() => {
      let end = Math.floor(new Date().getTime()/1000)
    let start = Math.floor((new Date().getTime()/1000) - 15780000);
      if((typeof props.longlat.latitude) == "number"){
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${+props.longlat.latitude}&lon=${+props.longlat.longitude}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {

            setPost6(res.data.list[0].main.aqi)
        }) 
        .catch(err => console.log(err))
      }
    }, [+props.longlat.latitude, +props.longlat.longitude])

    useEffect(() => {
      let end = Math.floor(new Date().getTime()/1000)
      let start = Math.floor((new Date().getTime()/1000) - 7890000);
      if((typeof props.longlat.latitude) == "number"){
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${+props.longlat.latitude}&lon=${+props.longlat.longitude}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {

            setPost3(res.data.list[0].main.aqi)
        }) 
        .catch(err => console.log(err))
      }
    }, [+props.longlat.latitude, +props.longlat.longitude])

const clickHandler6 = (e) => {
  setShowMe6(!showMe6)
}
const clickHandler3 = (e) => {
  setShowMe3(!showMe3)
}
const clickHandler12 = (e) => {
  setShowMe12(!showMe12)
}
    
    return (
    <div>
      <h1>
        <button onClick={clickHandler12}>Average AQI For {props.input} - Past Year</button>
        <button onClick={clickHandler6}>Average AQI For {props.input} - Past 6 Months</button>
        <button onClick={clickHandler3}>Average AQI For {props.input} - Past 3 Months</button>
        <div>
          { showMe3 && `Average AQI for the past 3 months from ${new Date().toLocaleDateString()}: ${post3}`}
        </div>
        <div>
          { showMe6 && `Average AQI for the past 6 months from ${new Date().toLocaleDateString()}: ${post6}`}
        </div>
        <div>
          { showMe12 && `Average AQI for the past 12 months from ${new Date().toLocaleDateString()}: ${post12}`}
        </div>
      </h1>
    </div>
  )
}

export default Search