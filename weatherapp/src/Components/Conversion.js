import { useState } from "react";
import axios from 'axios';

const handleSearch = (input, setlonglat) => {
  if (input) {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=11dd0e0508dfc8182c267b456f699a08&query=${input.replace(' ','')}`)
      .then((res) => setlonglat(res.data.data[0]))
  }
}

const Conversion = (props) => {
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
    </div>
  )
}

export default Conversion;
