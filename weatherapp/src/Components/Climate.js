import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Climate(props) {
    const [zone, setZone] = useState(null);

    useEffect(() => {
        if ((typeof props.longlat.latitude) == "number") {
            axios.get(`http://climateapi.scottpinkelman.com/api/v1/location/${+props.longlat.latitude}/${+props.longlat.longitude}`)
                .then((res) => {
                    setZone(res.data.return_values[0].zone_description)
                })
                .catch(err => console.log(err))
        }
    }, [props.longlat.latitude, props.longlat.longitude])


    return (
        <div>
            <h1>
                Climate Zone Description: {zone}
            </h1>
        </div>
    )
}
