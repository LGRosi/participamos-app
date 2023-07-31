import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

function Maps() {

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    const containerStyle = {
        width: "100%",
        height: "80vh",
    };

    const center = {
        lat: -34.60420557950179,
        lng: -58.39598947573842,
    };

    const onLoad = useCallback((mapInstance: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        mapInstance.fitBounds(bounds);
        setMap(mapInstance);
    }, [center]);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    const mapOptions = {
       zoom: 16,
       maxZoom: 16
    };

    return (
        <div>
            {
                isLoaded ? (
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    options={mapOptions}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    ></GoogleMap>
                ) : (
                    <div>Cargando Mapa...</div>
                )
            }
        </div>
    );
}

export default Maps;
