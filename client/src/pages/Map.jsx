import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';

class Map2 extends Component {
    
    state = {
        venues: []
    }

    componentDidMount() {
        this.getVenues()
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDW6lOOrNGtDEK_HD0glR1gBAUG7qCjL4o&callback=initMap")
        window.initMap = this.initMap
    }

    getVenues = () => {
        var place = document.getElementById("place").value;
        var city = document.getElementById("city").value;
        var url = "https://api.foursquare.com/v2/venues/search?"
        var parameters = {
                client_id: "LZUBA40RDG3UKGVH0RTYDRQ1IDIZ15Y1BVH4HYE3N1EH0QQW",
                client_secret: "5LSREHYYTZ3MPBUH5K43E3OQPW20I2LYR50RKTTIOCPHA5LU",
                near: city,
                query: place,
                v: "20201214",
                limit: 20
        }

        axios.get(url + new URLSearchParams(parameters))
            .then(response => {
                //console.log(response.data.response)
                this.setState({
                    venues: response.data.response.venues
                }, this.renderMap())
            })
            .catch(error => {
            //console.log("Error!! " + error);
            })
    }
    
    
    initMap= () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.8781, lng: -87.6298},
            zoom: 13
        });

        var infowindow = new window.google.maps.InfoWindow()

        this.state.venues.map(myVenue => {
            var contentString = `${myVenue.name}`
            
            var marker = new window.google.maps.Marker({
                position: {lat: myVenue.location.lat, lng: myVenue.location.lng},
                map: map,
                title: myVenue.name
            })

            marker.addListener('click', function() {
                infowindow.setContent(contentString)
                infowindow.open(map, marker)
            })
        });
    }
    
    render() {
        return (
            <div className="map">
                <form id="search-form" action="#">
                    <div className="form-group">
                        <label for="place">Enter Place Here</label>
                        <input placeholder="Gym" type="text" class="form-control form-control-sm" id="place"></input>
                    </div>
                    <div className="form-group">
                        <label for="city">Enter City</label>
                        <input placeholder="Chicago" type="text" class="form-control form-control-sm" id="city"></input>
                    </div>
                    <button id="searchBtn" class="btn btn-primary" onClick={this.getVenues}>Search</button>
                </form>
                <div id="map"></div>
            </div>

           
        )
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default Map2;