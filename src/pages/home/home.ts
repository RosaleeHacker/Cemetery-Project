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
    this.initMap();
  }
	
      initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: new google.maps.LatLng(43.129417, -77.639181),
          mapTypeId: 'roadmap'
        });

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

  		var marker1 = new google.maps.Marker({
          position: {lat: 43.129313, lng: -77.639573},
          map: map,
          title: 'Hello World!',
        });

        marker1.addListener('click', function() {
    		infowindow1.open(map, marker1);
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

  		var marker2 = new google.maps.Marker({
          position: {lat: 43.129569, lng: -77.639436},
          map: map,
          title: 'Hello World!'
        });

        marker2.addListener('click', function() {
    		infowindow2.open(map, marker2);
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

  		var marker3 = new google.maps.Marker({
          position: {lat: 43.129545, lng: -77.639168},
          map: map,
          title: 'Hello World!'
        });

        marker3.addListener('click', function() {
    		infowindow3.open(map, marker3);
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

  		var marker4 = new google.maps.Marker({
          position: {lat: 43.129388, lng: -77.638878},
          map: map,
          title: 'Hello World!'
        });

        marker4.addListener('click', function() {
    		infowindow4.open(map, marker4);
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

      var marker5 = new google.maps.Marker({
          position: {lat: 43.129674, lng: -77.639399},
          map: map,
          title: 'Hello World!',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
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

      var marker6 = new google.maps.Marker({
          position: {lat: 43.129520, lng: -77.638729},
          map: map,
          title: 'Hello World!',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
      });
      }
}