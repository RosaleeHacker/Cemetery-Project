import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
var map;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
  }
  
 ionViewDidLoad(){
 this.loadMap();
  }
	
  loadMap() {
  
      let options = {timeout:10000, enableletHighAccuracy: true};
      this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.hybrid
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
     
     //Necessary for navigation
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
            
     //first grave
      var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">John Doe</h1>'+
      '<div id="bodyContent">'+
      '<p>1/23/1863-4/09/1930</p>'+
      '<p>World War I</p>'+
      '</div>'+
      '</div>';

      var infowindow1 = new google.maps.InfoWindow({
    	content: contentString1
  		});
      
      let marker1 = new google.maps.Marker({
          map: this.map,
          position: {lat: 43.129313, lng: -77.639573},
        });
      
      marker1.addListener('click', function() {
    		infowindow1.open(this.map, marker1);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129313, lng: -77.639573},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
        
  		});
        
       //second grave
  	  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">James Doe</h1>'+
      '<div id="bodyContent">'+
      '<p>4/22/1893-6/13/1954</p>'+
      '<p>World War II</p>'+
      '</div>'+
      '</div>';

      var infowindow2 = new google.maps.InfoWindow({
    	content: contentString2
  		});

      let marker2 = new google.maps.Marker({
          map: this.map,
          position: {lat: 43.129569, lng: -77.639436},
        });

        marker2.addListener('click', function() {
    		infowindow2.open(this.map, marker2);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129569, lng: -77.639436},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
  		});
        
        //third grave
  	  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Johnny Doe</h1>'+
      '<div id="bodyContent">'+
      '<p>3/13/1879-11/28/1925</p>'+
      '<p>World War I</p>'+
      '</div>'+
      '</div>';

      var infowindow3 = new google.maps.InfoWindow({
    	content: contentString3
  		});

  		let marker3 = new google.maps.Marker({
          position: {lat: 43.129545, lng: -77.639168},
          map: this.map,
          title: 'Hello World!'
        });

        marker3.addListener('click', function() {
    		infowindow3.open(this.map, marker3);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129545, lng: -77.639168},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
  		});

  		//forth grave
  	  var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Jane Doe</h1>'+
      '<div id="bodyContent">'+
      '<p>12/04/1821-3/17/1865</p>'+
      '<p>Civil War</p>'+
      '</div>'+
      '</div>';

      var infowindow4 = new google.maps.InfoWindow({
    	content: contentString4
  		});

  		let marker4 = new google.maps.Marker({
          position: {lat: 43.129388, lng: -77.638878},
          map: this.map,
          title: 'Hello World!'
        });

        marker4.addListener('click', function() {
    		infowindow4.open(this.map, marker4);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129388, lng: -77.638878},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
  		});

      //1st vegetation
      var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Black Raspberry</h1>'+
      '<div id="bodyContent">'+
      '<p>Rubus Occidentalis</p>'+
      '<p>A delicious shrub growing...See more.</p>'+
      '</div>'+
      '</div>';

      var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
      });

      let marker5 = new google.maps.Marker({
          position: {lat: 43.129674, lng: -77.639399},
          map: this.map,
          title: 'Hello World!',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        marker5.addListener('click', function() {
        infowindow5.open(this.map, marker5);
        directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129674, lng: -77.639399},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
        
      });

      //2nd vegetation
      var contentString6 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Blood Root</h1>'+
      '<div id="bodyContent">'+
      '<p>Sanguinaria Canadensis</p>'+
      '<p>Blood root gets its name... See more.</p>'+
      '</div>'+
      '</div>';

      var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
      });

      let marker6 = new google.maps.Marker({
          position: {lat: 43.129520, lng: -77.638729},
          map: this.map,
          title: 'Hello World!',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        marker6.addListener('click', function() {
        infowindow6.open(this.map, marker6);
        directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 43.129520, lng: -77.638729},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
        
      });
        

    }, (err) => {
       console.log(err);
    });

     
    }

}
