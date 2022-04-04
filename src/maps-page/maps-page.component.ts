import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare function initMap(): void;
@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss'],
})
export class MapsPageComponent implements OnInit {
  title = 'google-maps';
  mainMap!: google.maps.Map;
  center!: google.maps.LatLngLiteral;

  constructor() {}

  ngOnInit(): void {
    initMap();
  }
}
