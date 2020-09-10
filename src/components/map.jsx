import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import mapStyles from '../style/mapStyle.json'

class MapContainer extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) => {
    // console.log('onMarkerClick')
    // console.log('props:',props)
    // console.log('marker:',marker)
    // console.log('e:',e)

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  getMarkers = () => {
       
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: "#191b26"
    }

    const mapOptions = {
      fullscreenControl: false,
      mapTypeControl: false,
      backgroundColor: "#191b26"
    }

    return (
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyle}
          styles={mapStyles}
          initialCenter={{ lat: -23.6235982, lng: -46.694810}}
          onClick={this.onMapClicked}
          defaultOptions={mapOptions}
        >
          <Marker
            title={'Zetta Haus'}
            name={'Rua Jaceru, 384 - Conjunto 306'}
            extra={'+55 11 5096 7750'}
            position={{lat: -23.623559, lng: -46.694810}}
            icon={{
              url: "/img/zetta_icon.png",
              // anchor: new google.maps.Point(32,32),
              // scaledSize: new google.maps.Size(64,64)
            }}
            onClick={this.onMarkerClick}
          />
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
              <div className="infoWindowWrap">
                <h3>{this.state.selectedPlace.title}</h3>
                <p>{this.state.selectedPlace.name}</p>
                <p className="extra">{this.state.selectedPlace.extra}</p>
              </div>
          </InfoWindow> */}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsDQe2ORZegW64b9768PG4EbmwtWLVeTc'
})(MapContainer)