import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  public zoom = 8;
  public markerPosition?: google.maps.LatLngLiteral;
  public center: google.maps.LatLngLiteral = {
    lat: -23.209000600373493,
    lng: -46.65576271409623,
  };

  @Output() mapClick: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPosition = event.latLng.toJSON();
      this.mapClick.emit(this.markerPosition);
    }
  }

  setMarker(latitude: number, longitude: number) {
    this.markerPosition = {
      lat: latitude,
      lng: longitude,
    };
    this.center = {
      lat: latitude,
      lng: longitude,
    };
  }

  getMarkerLocation(callback: ((address: string) => void)) {
    if (!this.markerPosition) return;

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: this.markerPosition }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK && results && results.length !== 0) {
        callback(results[1].formatted_address);
      }
    });
  }
}
