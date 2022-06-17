import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import styles from "./Maps.module.css";

export default function DisplayMap(props) {

    if ((typeof props.longlat.latitude) == "number") {
        return (
            <MapContainer
                className={styles.map}
                center={[props.longlat.latitude, props.longlat.longitude]}

                zoom={13}
                scrollWheelZoom={false}
                placeholder={<p>placeholder</p>}>
                <ChildMap longlat={props.longlat} />

            </MapContainer>
        )
    }
}

function ChildMap(props) {
    const map = useMap();

    useEffect(() => {
        map.setView([props.longlat.latitude, props.longlat.longitude])
    }, [props.longlat]);

    return (
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    )

}
