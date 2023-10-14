const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5797b5b5374a7a64f53d270fbf443cbf&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&units=f`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined);
    } else {
      const data = `${body.current.weather_descriptions[0]} throughout the day. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
      callback(undefined, data);
    }
  })
}

module.exports = forecast
