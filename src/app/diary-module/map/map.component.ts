import {Component, Input, OnInit} from '@angular/core';
import {GoogleMapsService} from '../../services/google.maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 37.4267861;
  lng = -122.0806032;

  @Input('coordinates') set coordinates(obj: any) {
    this.lat = obj.lat;
    this.lng = obj.lng;
  }

  constructor(private googleMapService: GoogleMapsService) { }

  ngOnInit() {
    this.googleMapService.getGeoCordinates('1600 Amphitheatre Parkway, Mountain View, CA')
  }
}
