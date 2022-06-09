import { useState } from "react";
import axios from 'axios';

import Search from "./Search";


const handleSearch = (input, setlonglat) => {
  
  if (input) {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${input.replace(' ','')}`)
      .then((res) => setlonglat(res.data.data[0]))
  }
}

const Conversion = () => {
  
    const[longlat, setlonglat] = useState({});
    const [input, setInput] = useState("");

  return (
    <div>
        <input
          type='text'
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={()=>{handleSearch(input, setlonglat)}}>Submit Location</button>
        <h1>{longlat.latitude}</h1>
        <h1>{longlat.longitude}</h1>
        <Search longlat = {longlat}/>
    </div>
  )
}

export default Conversion;
