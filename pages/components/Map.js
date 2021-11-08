import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3BzaW5naCIsImEiOiJja3ZtM24xNjAwcm96Mm9vNXFjNmptNGd0In0.mz4NCu5bVNwt-V8FZ7NTxg'

const Map = (props) => {
  console.log(props)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if(props.pickupCoordinates){
      
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropOffCoordinates){
      addToMap(map, props.dropOffCoordinates)
    }

    if(props.pickupCoordinates && props.dropOffCoordinates){
      
      map.fitBounds([
        props.dropOffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropOffCoordinates])

 
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }
  
 

  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2 `