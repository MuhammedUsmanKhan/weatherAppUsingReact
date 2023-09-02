import { useState, useRef } from "react";
import axios from "axios";

const Search = () => {


    const [weatherData, setWeatherData] = useState([]);
    const cityNameRef = useRef(null);

    let fetchcurrentWeather = async (e) => {

        e.preventDefault()
       
        try {
            
            let forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=5798f70aa0fbb667fccfb6100468ab92`)
            let forecastDataArray = forecastData.data
            console.log(forecastDataArray)
        }
        catch (error) {
            console.log(error)
        }

    }


    return <div className="max-w-md mx-auto mt-8 mb-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Search for Weather</h1>
        <form className="flex items-center border rounded-md overflow-hidden">
            <input type="text" ref={cityNameRef} className="py-2 px-4 w-full outline-none" placeholder="Enter a location..." />
            <button onClick={fetchcurrentWeather} type="submit" className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none">
                Search
            </button>
        </form>
    </div>
}


export default Search