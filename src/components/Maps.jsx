import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Maps.module.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Maps() {
    const position = [50.48825866633974, 30.499553338214305]

    return (
        <section id='geoplace' className={styles.Maps}>
            <h1>Район на карті</h1>

            <MapContainer className={styles.LeafetContainer} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Ми тут
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    );
};
