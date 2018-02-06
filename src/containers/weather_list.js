import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component  {
  renderWeather(cityData){
    const name =  cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humis = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    return(
      <tr key = {name}>
        <td><GoogleMap lon ={lon} lat = {lat} /></td>
        <td><Chart data = {temps} color = "orange" units="K"/></td>
        <td><Chart data = {pressure} color = "green" units="hPa"/></td>
        <td><Chart data = {humis} color = "black" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(k)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather : weather };
}

export default connect(mapStateToProps)(WeatherList);
