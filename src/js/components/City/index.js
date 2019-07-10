import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
  return {
    cityInput: store.weather.cityInput,
    lat: store.weather.lat,
    lon: store.weather.lon,
    temp: store.weather.temp,
    pressure: store.weather.pressure,
    humidity: store.weather.humidity,
    temp_min: store.weather.temp_min,
    temp_max: store.weather.temp_max,
    windSpeed: store.weather.windSpeed
  };
}

export default connect(mapStoreToProps)(City);
