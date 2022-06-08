import { useState } from "react";
import axios from 'axios';
import Search from "./Search";

const handleSearch = (input, setlonglat) => {
  if (input) {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=3dcfa019ea61dc3b040b9858b46ad629&query=${input.replace(' ','')}`)
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
        <Search longlat = {longlat}/>
    </div>
  )
}

export default Conversion;
