import React from 'react';
import Resitems from './resitems';
import basil from '../Img/basil.png';
import leaf from '../Img/the leaf .png';
import css from '../Img/the city SS.png';
import ojst from '../Img/Olde Jaol.png';
import tj from '../Img/tj.png';
import CH from '../Img/coccia house.png';
import sbg from '../Img/SBG.png';
import BRCB from '../Img/BR.png';
import MI from '../Img/Mariola.png';
import PHO from '../Img/Pho.png'


const restaurants = [
    { name: "The Leaf Restaurant", image: leaf, website: "https://theleaf.restaurant/?gad_source=1&gclid=Cj0KCAiA0PuuBhBsEi0AS7fsNVlkV-7FOBtejtYKcvXsi3OItbbsUXkjWC7M8WbulWOAZG6471xNpdAaAnqVEALw_wcB" },
    { name: "The City Square Steakhouse", image: css, website: "https://www.citysquaresteakhouse.com/" },
    { name: "Basil Asian Bistro", image: basil, website: "https://basilasianrestaurant.com/" },
    { name: "Salsaroja Bar and Grill", image: sbg, website: "https://salsarojabar.com/" },
    { name: "Olde Jaol Steakhouse and Tavern", image: ojst, website: "https://www.oldejaol.com/" },
    { name: "TJ’s Restaurant", image: tj , website: "https://www.tjsrestaurants.com/" },
    { name: "Coccia House", image: CH, website: "http://www.cocciahouse.com/" },
    { name: "Mariola Italian", image: MI, website: "https://www.mariolaitalian.com/" },
    { name: "Pho Bar", image: PHO, website: "https://woosterphobar.uorder.io/" },
    { name: "Broken Rocks Café & Bakery", image: BRCB, website: "https://www.brokenrockscafe.com/" }
   
];

const resList = () => {
    return (
        <div className=' card-container'>
            {restaurants.map((restaurant, index) => (
                <Resitems key={index} restaurant={restaurant} />
            ))}
        </div>
    );
}

export default resList;