import React from 'react';

const resitems = ({ restaurant }) => {
    const { name, image, website } = restaurant;

    const handleVisitWebsite = () => {
        window.open(website, '_blank');
    };

    return (
        <div className="card">
            <img src={image} alt={name} className="card" />
            <h3>{name}</h3>
            <button onClick={handleVisitWebsite} className="btn">Visit Website</button>
        </div>
    );
}

export default resitems;