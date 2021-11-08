import React , {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '/carList'


const RideSelector = (props) => {
    const [duration, setDuration ]= useState(0);



    const getDirections = (pickupCoordinates, dropOffCoordinates) => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            // console.log
            setDuration(data.routes[0].duration)
        })
    }

   
//error in the dynamic duration 


    return (
        <Wrapper>
           <Title>
               Choose a Ride, or Swipe Up for More
           </Title>
           <CarList>
               { carList.map((car,index) =>(
                    <Car key={index}> 
                    <CarImage src={car.imgUrl} /> 
                    <CarDetails>
                        <Service>
                            {car.service}
                        </Service>
                        <Time>
                            5 min away
                        </Time>
                    </CarDetails>
                    <Price>${(10 * car.multiplier).toFixed(2)}</Price>
                </Car>
             ) ) }
               
           </CarList>
        </Wrapper>
    )
}

export default RideSelector
const CarDetails = tw.div `
flex-1 
`

const Service = tw.div `
font-medium 
`
const Time = tw.div `
text-xs text-blue-500
`
const Price = tw.div `
text-sm
`
const   Car = tw.div `
flex p-4 items-center
`
const CarImage = tw.img `
h-14 mr-4
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div `
 overflow-y-scroll

`
const Wrapper = tw.div `
flex-1 overflow-y-scroll flex flex-col
`
