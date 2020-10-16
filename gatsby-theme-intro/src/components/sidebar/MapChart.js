import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const { colors } = require('tailwindcss/defaultTheme');

const MapChart = () => {
  return (
    <ComposableMap
      style={{marginTop: "5px"}}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-25.0, -52.0, 0],
        scale: 1200
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[25.27, 54.68]}>
        <circle r={10} fill={colors.black} />
      </Marker>
      
    </ComposableMap>
  );
};

export default MapChart;