import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import imageMaps from '../../images/maps.png'

const containerStyle = {
    width: '100%',
    height: '320pt',
    
};


const center = {
    lat: 28.98, 
    lng: -13.83
};

function Maps() {
  return (
    
    //Como está la Apikey caducada devolvemos un enlace con una imagen dentro a google maps
    <a href="https://goo.gl/maps/AKA2WpxEYytrf8Nw9">
      <img src={imageMaps} alt="maps"   width="100%" height="100%" />
    </a>




    
    //Clave caducada 
    // <LoadScript googleMapsApiKey="DIza2yBEChharJTzA-0vaW3b4tIb6nfqoPCCXXQ">
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={19}
    //   >
    //     <>
    //       <Marker position={ center} label="CASANDRA">
    //       </Marker>
    //     </>
    //   </GoogleMap>
    // </LoadScript>
  )
}

export default Maps