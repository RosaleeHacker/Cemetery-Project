import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import {Observable} from "rxjs/Observable";

declare var google;
var map;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public dataService: DatabaseAccessService) {
  }

  ionViewDidLoad() {
    this.initMap();
    this.loadVegetationMarkers();
  }

 initMap() {
  
      let options = {timeout:10000, enableletHighAccuracy: true};
      this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.hybrid
      }
       let element = this.mapElement.nativeElement;
       this.map = new google.maps.Map(element, mapOptions);

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
          position: {lat: 25.2750, lng: 55.3681},
        });
      
      marker1.addListener('click', function() {
    		infowindow1.open(this.map, marker1);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 25.2750, lng: 55.3681},
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
          position: {lat: 42.641915, lng: 18.102889},
        });

        marker2.addListener('click', function() {
    		infowindow2.open(this.map, marker2);
            directionsDisplay.setMap(this.map);
 
            directionsService.route({
                origin: latLng,
                destination: {lat: 42.641915, lng: 18.102889},
                travelMode: google.maps.TravelMode['DRIVING']}, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        }); 
  		});
        
    //third grave
    var contentString3 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">Johnny Doe</h1>' +
      '<div id="bodyContent">' +
      '<p>3/13/1879-11/28/1925</p>' +
      '<p>World War I</p>' +
      '</div>' +
      '</div>';

    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
    });

    var marker3 = new google.maps.Marker({
      position: {lat: 43.129545, lng: -77.639168},
      map: map,
      title: 'Hello World!'
    });

    marker3.addListener('click', function () {
      infowindow3.open(map, marker3);
    });

    //forth grave
    var contentString4 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">Jane Doe</h1>' +
      '<div id="bodyContent">' +
      '<p>12/04/1821-3/17/1865</p>' +
      '<p>Civil War</p>' +
      '</div>' +
      '</div>';

    var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
    });

    var marker4 = new google.maps.Marker({
      position: {lat: 43.129388, lng: -77.638878},
      map: map,
      title: 'Hello World!'
    });

    marker4.addListener('click', function () {
      infowindow4.open(map, marker4);
    });

   }, (err) => {
       console.log(err);
    });
   
 }

  loadVegetationMarkers() {
    let vegetationList$: Observable<Vegetation[]>;
    vegetationList$ = this.dataService.getVegetationData().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      }
    );

    vegetationList$.subscribe(vegetation => {
      vegetation.forEach(bush => {
        this.createMarker(bush.name, bush.description, bush.lat, bush.long);
      })
    });
  }

  createMarker(name, description, lat, long){
    //2nd vegetation
    var markerContent = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>' +
      '<div id="bodyContent">' +
      '</div>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: markerContent
    });

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map,
      title: name,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }

}
