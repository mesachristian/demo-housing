import React, { Fragment } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

//const GOOGLE_API_KEY = 'AIzaSyCb9l6EDOPVCxgCEJvCAu530KJ4xBqVRsU';

const HouseInfoSection = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: undefined,
    });

    return (
        <Fragment>
            <h1 className='mb-8 text-5xl text-black opacity-100'>INFO</h1>


            <div className='w-full h-[650px] bg-white rounded-2xl shadow-lg p-11'>


                <div className='h-full w-full bg-cyan-300'>

                </div>
            </div>

            <InfoSection title='Location'>
                { isLoaded && <Map/>}
            </InfoSection>
        </Fragment>
    )
}

const InfoSection = ( props ) => {
    return(
        <div className='w-full bg-white rounded-2xl shadow-lg py-9 px-11 mt-10'>
            <h1 className='text-base text-gray-900 font-extrabold border-b-[1px] border-b-orange-700 py-3 mb-8'>{props.title}</h1>
            {props.children}
        </div>
    )
} 

const Map = () => {
    return(
        <GoogleMap
            zoom={10}
            center={ { lat: 44, lng: -80} }
            mapContainerClassName='w-full h-[400px]'
        >
            <Marker position={
                { lat: 44, lng: -80}
            } />
        </GoogleMap>
    )
}

export default HouseInfoSection;