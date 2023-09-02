// import logo from './logo.svg';
import Forecastpost from './components/weatherforecast/forecastpost'
import Weatherpost from './components/weatherpost/currentpost'
import Search from './components/weathersearchbar/searchbar'
import './App.css';
import Forecast from './components/weatherforecast/forecastpost';

const App = () => {
  return (<div className="container  mx-auto flex flex-col  space-x-4 ">
    <Search />
    <div className='flex'>
      <div className="postcontainer">
        {/* <div class="max-w-md p-6  bg-white rounded-lg shadow-md"> */}
          <Weatherpost />
          <Forecast />
        {/* </div> */}
      </div>
    </div>
  </div>)
}

export default App;
