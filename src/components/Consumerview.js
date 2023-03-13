import React from 'react';
import Restaurants from './Restaurants';
import ConsumerNavbar from './ConsumerNavbar';
import Slider from './Slider';

export default function Consumerview() {
    
    return (
        <>
        <ConsumerNavbar />
        <Slider/>
        <Restaurants/>
        </>
    );
}