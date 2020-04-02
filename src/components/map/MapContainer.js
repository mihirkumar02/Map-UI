import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    
    render(){

        return(
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{lat: 12.97244, lng: 77.580}}
            >
                <Marker position={{ lat: 12.97244, lng: 77.580}} />
                <Marker position={{ lat: 12.971389, lng: 77.750130}} />
                <Marker position={{ lat: 12.934533, lng: 77.626579}} />
                <Marker position={{ lat: 12.9081357, lng: 77.64760799999999}} />
                <Marker position={{ lat: 12.9250074, lng: 77.59380280000005}} />
                <Marker position={{ lat: 12.9854542, lng: 77.66392480000002}} />
                <Marker position={{ lat: 12.9971503, lng: 77.61425580000002}} />
            </Map>

           
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4'
})(MapContainer); //Renamed googleapiwrapper to MapContainer