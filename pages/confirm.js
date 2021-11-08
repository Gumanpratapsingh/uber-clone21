import { useEffect, useState } from 'react'
import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
        const router = useRouter()
        const { pickup, dropoff } = router.query


        /*console.log("Pickup", pickup)
        console.log("Dropoff", dropoff)*/
        const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0])
        const [ dropOffCoordinates, setDropoffCoordinates ] = useState([0,0])






    const getPickupCoordinates = (pickup) => {
        //const pickup = "Santa Monica";

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZ3BzaW5naCIsImEiOiJja3ZtM24xNjAwcm96Mm9vNXFjNmptNGd0In0.mz4NCu5bVNwt-V8FZ7NTxg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
        // ?Access_Token


    }
     const getDropoffCoordinates =(dropoff) =>{

        //const dropoff = "New Delhi";

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZ3BzaW5naCIsImEiOiJja3ZtM24xNjAwcm96Mm9vNXFjNmptNGd0In0.mz4NCu5bVNwt-V8FZ7NTxg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
        // ?Access_Token
     }
    useEffect(() =>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);  
    }, [pickup,dropoff])
    return (
        <Wrapper>
            <ButtonContainer>
        <Link href='/search' passHref>
         
           <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        
        </Link>
        </ButtonContainer>

            <Map
                pickupCoordinates={pickupCoordinates}
                dropOffCoordinates={dropOffCoordinates}
                


            />

            <RideContainer>
                
                <RideSelector
                  pickupCoordinates={pickupCoordinates}
                  dropOffCoordinates={dropOffCoordinates}
                />

                <ConfirmButtonContainer>
                    <ConfirmButton>
                      Confirm UberX
                   </ConfirmButton>
                    

                </ConfirmButtonContainer>
                
            </RideContainer>
            
        </Wrapper>
    )
}

export default Confirm
const ButtonContainer = tw.div `
bg-white rounded-full top-4 left-4 z-10  shadow-md cursor-pointer absolute
`
const BackButton = tw.img `
h-10 cursor-pointer 
`


const ConfirmButton = tw.div `
bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer
`
const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div `
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div `
flex h-screen flex-col
`
