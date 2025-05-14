import "./Features.css";
import React from 'react';


const Feature = ({ title, description }) => {
    return (
        <div className="feature">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );

};


function Features() {
    return (
        <div className="features">
               <Feature title="feature one" description=" Course Management" />
               <Feature title="feature two" description=" Student Management" />
               <Feature title="feature three" description=" Faculty Management" />
               <Feature title="feature four" description=" Grade Tracking" />

        </div>
    );
}

export default Features;