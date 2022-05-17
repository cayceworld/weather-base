import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';
import { useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState('');


  const handleCityChange = useCallback(cityName => {
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bed7dd28ffcd4c86709160ecbef1fcc&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              const weatherData = {
                city: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].main
              };
              setWeather(weatherData);
              setPending(false);
            })
        } else {
          setError(true);
          setPending(false);
        }
      });


  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {weather && !pending && !error && <WeatherSummary weather={weather} />}
      {pending && !error && <Loader />}
      {error && !pending && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;