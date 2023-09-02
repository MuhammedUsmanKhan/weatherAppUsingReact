import { useState, useRef } from "react";
import axios from "axios";


const Forecast = () =>{









    
    return <div className="max-w-xl  mt-8 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-semibold mb-4">5-Day Forecast</h1>
    <div className="grid grid-cols-5 gap-4">
        <div className="text-center">
            <p className="text-lg">Monday</p>
            <img src="forecast-icon-1.png" alt="Forecast Icon" className="mx-auto my-2 w-12" />
            <p className="text-lg">High: 28°C</p>
            <p className="text-lg">Low: 18°C</p>
        </div>
        <div className="text-center">
            <p className="text-lg">Monday</p>
            <img src="forecast-icon-1.png" alt="Forecast Icon" className="mx-auto my-2 w-12" />
            <p className="text-lg">High: 28°C</p>
            <p className="text-lg">Low: 18°C</p>
        </div>
        <div className="text-center">
            <p className="text-lg">Monday</p>
            <img src="forecast-icon-1.png" alt="Forecast Icon" className="mx-auto my-2 w-12" />
            <p className="text-lg">High: 28°C</p>
            <p className="text-lg">Low: 18°C</p>
        </div>
        <div className="text-center">
            <p className="text-lg">Monday</p>
            <img src="forecast-icon-1.png" alt="Forecast Icon" className="mx-auto my-2 w-12" />
            <p className="text-lg">High: 28°C</p>
            <p className="text-lg">Low: 18°C</p>
        </div>
        <div className="text-center">
            <p className="text-lg">Monday</p>
            <img src="forecast-icon-1.png" alt="Forecast Icon" className="mx-auto my-2 w-12" />
            <p className="text-lg">High: 28°C</p>
            <p className="text-lg">Low: 18°C</p>
        </div>
        {/* <!-- Repeat this card structure for each day of the forecast --> */}
    </div>
</div>
}

export default Forecast