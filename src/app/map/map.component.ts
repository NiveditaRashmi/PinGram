import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!navigator.geolocation) {
      console.log("location is not supported on your device.")
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`)
      }
    )
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;

    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
        if(position.coords.latitude == desLat) {
          navigator.geolocation.clearWatch(id)
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  }
}
