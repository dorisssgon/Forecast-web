import React,{ Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //maps.Map is to embed google api
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    });
  }
  render() {
    //this.refs.map  directed access dom element to reference
    return <div ref ="map"  />
  }
}

export default GoogleMap;
