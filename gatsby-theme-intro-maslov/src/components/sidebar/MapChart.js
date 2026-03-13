import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const MapChart = () => {
  return (
    <ComposableMap
      style={{ marginTop: "5px" }}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-25.0, -52.0, 0],
        scale: 1200,
      }}
      className="rounded-tl-lg rounded-tr-lg overflow-hidden"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
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
        {/* use a literal color to avoid requiring Tailwind internals at runtime */}
        <circle r={10} fill="#000" />
      </Marker>
    </ComposableMap>
  )
}

export default MapChart
