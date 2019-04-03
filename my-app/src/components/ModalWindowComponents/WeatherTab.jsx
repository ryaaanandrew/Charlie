
import React, { Component } from 'react';
// import DarkSkyApi from 'dark-sky-api'
// DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a'


class WeatherTab extends Component {

    render() {
        return(
            <div>
                <h1>Current temp: {this.props.weather.currently.apparentTemperature}</h1>
                <h3>{this.props.weather.currently.summary}</h3>
                <h3>Summary: {this.props.weather.daily.summary}</h3>

            </div>
        );
    }
}

export default WeatherTab;