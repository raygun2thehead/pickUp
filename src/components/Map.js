import React, {Component} from 'react';
import axios from 'axios';

export default class Map extends Component {
    state = {
        venues: []
      }
    
    componentDidMount() {
        this.getVenues()
    }
    
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDW6lOOrNGtDEK_HD0glR1gBAUG7qCjL4o&callback=initMap")
        window.initMap = this.initMap
    }
    
    getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
            client_id: "LZUBA40RDG3UKGVH0RTYDRQ1IDIZ15Y1BVH4HYE3N1EH0QQW",
            client_secret: "5LSREHYYTZ3MPBUH5K43E3OQPW20I2LYR50RKTTIOCPHA5LU",
            query: "basketball courts",
            near: "Chicago",
            v: "20182507"
        }
    
        axios.get(endPoint + new URLSearchParams(parameters))
            .then(response => {
                this.setState({
                    venues: response.data.response.groups[0].items
                }, this.renderMap())
                console.log(response.data.response.groups[0].items);
            })
            .catch(error => {
                console.log("Error!" + error);
            })
    }
    
    initMap = () => {
    
        //Create A Map
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.8781, lng: -87.6298},
            zoom: 11
        });
    
        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow()
    
        // Display Dynamic Markers
        // eslint-disable-next-line array-callback-return
        this.state.venues.map(myVenue => {
            var contentString = `${myVenue.venue.name}`;
    
            // Create A Marker
            var marker = new window.google.maps.Marker({
                position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
                map: map,
                title: myVenue.venue.name
            });
    
            // Click On A Marker
            marker.addListener("click", () => {
                
                // Change The Content
                infowindow.setContent(contentString);
    
                // Open An InfoWindow
                infowindow.open(map, marker);
            });
        });
    }
    
    render() {
        return (
            <main>
              <div id="map"></div>
            </main>
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