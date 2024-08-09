import { useState } from "react"
import { Link } from "react-router-dom"
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from "react-simple-maps"

const geoUrl = process.env.REACT_APP_MAP_URL

const style = {
    default: {
        fill: '#EEE',
    },
    hover: {
        fill: 'rgb(54 197 94)',
    },
    pressed: {
        fill: 'rgb(14 147 105)',
    },
}


const Map = () => {
    const [geo, setGeo] = useState()
    return (
        <>
            {geo ? <span>Detay Görüntüle : {geo?.properties?.name}</span> : <span>&nbsp;</span>}
            <ComposableMap height={315} projectionConfig={{ rotate: [-10, 0, 0], scale: 100 }}>
                <ZoomableGroup>
                    <Sphere stroke="gray" strokeWidth={0.2} />
                    <Graticule stroke="gray" strokeWidth={0.2} />
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Link key={geo.rsmKey} to={`/detail?code=${geo?.id}`}>
                                    <Geography onMouseEnter={() => setGeo(geo)} onMouseLeave={() => setGeo(null)} style={style} geography={geo} />
                                </Link>
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>

    )
}

export default Map