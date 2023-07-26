import { stations } from './data.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/api/stations', function (req, res) {
  const queryStringParams = req.query;

  const latitude = Number(queryStringParams.latitude);
  const longitude = Number(queryStringParams.longitude);
  const latitudeDelta = Number(queryStringParams.latitudeDelta);
  const longitudeDelta = Number(queryStringParams.longitudeDelta);

  console.log(queryStringParams)
  console.log(latitude, longitude, latitudeDelta, longitudeDelta);

  const northEastBoundary = {
    latitude: latitude + latitudeDelta,
    longitude: longitude + longitudeDelta,
  };

  const southWestBoundary = {
    latitude: latitude - latitudeDelta,
    longitude: longitude - longitudeDelta,
  };

  const isStationLatitudeWithinBounds = (station) => {
    return (
      station.latitude > southWestBoundary.latitude &&
      station.latitude < northEastBoundary.latitude
    );
  };

  const isStationLongitudeWithinBounds = (station) => {
    return (
      station.longitude > southWestBoundary.longitude &&
      station.longitude < northEastBoundary.longitude
    );
  };

  const foundStations = stations.filter(
    (station) => isStationLatitudeWithinBounds(station) && isStationLongitudeWithinBounds(station)
  );

  console.log('찾은 충전소 갯수: ' + foundStations.length);

  const responseObject = {
    stations: foundStations
  };
  res.json(responseObject);
});
