import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import {Observable} from "rxjs/Observable";
import {DetailsPage} from "../details/details";
import {Tombstone} from "../../models/tombstone/tombstone.interface";
import {TombstoneDetailsPage} from "../tombstone-details/tombstone-details";

declare var google;
var map;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindows: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public dataService: DatabaseAccessService) {
    this.infoWindows = [];

    this.loadVegetationMarkers();
    this.loadTombstoneMarkers();
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: new google.maps.LatLng(43.129417, -77.639181),
      mapTypeId: 'roadmap'
    });
  }

  loadTombstoneMarkers() {
    let tombstoneList$: Observable<Tombstone[]>;
    tombstoneList$ = this.dataService.getTombstoneData().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      }
    );

    tombstoneList$.subscribe(tombstone => {
      tombstone.forEach(person => {
        this.createMarker(person, 'tombstone');
      })
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
        this.createMarker(bush, 'vegetation');
      })
    });
  }

  createMarker(object, objectType) {
    let markerIcon = '';

    //2nd vegetation
    var markerContent = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">' + object.name + '</h1>' +
      '<div id="bodyContent">' +
      '<p id="tap">See more...</p>' +
      '</div>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: markerContent
    });

    if (objectType === 'tombstone') {
      markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
    else if (objectType === 'vegetation') {
      markerIcon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    }
    else {
      markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }

    var marker = new google.maps.Marker({
      position: {lat: object.lat, lng: object.long},
      map: map,
      title: object.name,
      icon: markerIcon
    });

    var allWindows = this.infoWindows;

    marker.addListener('click', function () {
      for (let i = 0; i < allWindows.length; i++) {
        allWindows[i].close();
      }
      infowindow.open(map, marker);
    });

    this.infoWindows.push(infowindow);

    google.maps.event.addListenerOnce(infowindow, 'domready', () => {
      document.getElementById('tap').addEventListener('click', () => {

        if (objectType === 'tombstone') {
          this.navCtrl.push(TombstoneDetailsPage, {tombstone: object});
        } else {
          this.navCtrl.push(DetailsPage, {bush: object});
        }
      });
    });
  }
}
