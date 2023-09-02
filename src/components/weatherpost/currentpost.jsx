import { useState, useRef } from "react";
import axios from "axios";

const Post = () => {


    return <div className="max-w-md p-6  bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Current Weather</h1>
        <div className="flex items-center space-x-4">
            <div className="w-16">
                <img src="current-weather-icon.png" alt="Current Weather Icon" className="w-full" />
            </div>
            <div>
                <h2 className="text-xl font-semibold">City, Country</h2>
                <p className="text-lg">Temperature: 25°C</p>
                <p className="text-lg">Condition: Sunny</p>
                <p className="text-lg">Humidity: 60%</p>
                <p className="text-lg">Wind Speed: 10 km/h</p>
            </div>
        </div>
    </div>



}


export default Post