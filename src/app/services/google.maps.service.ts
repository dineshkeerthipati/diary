import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private static readonly geoCodingKey = 'AIzaSyDi7-il0COKzcrYMhuDYoodanERnjenvwY';
  private static readonly jsonOutput = 'json';
  private static readonly address = 'address';
  private static readonly equals = '=';
  private static readonly geoCodeBaseUri = 'https://maps.googleapis.com/maps/api/geocode/';

  constructor(private http: HttpClient) {}

  public getGeoCordinates(add: string) {
    // const params = new HttpParams({fromString: GoogleMapsService.address + GoogleMapsService.equals + add});
    const params = new HttpParams().set(GoogleMapsService.address, add).set('key', GoogleMapsService.geoCodingKey);
    return this.http.get(GoogleMapsService.geoCodeBaseUri + GoogleMapsService.jsonOutput, {params});
    /*return this.http.get(GoogleMapsService.geoCodeBaseUri + GoogleMapsService.jsonOutput + '?'
      + GoogleMapsService.address + GoogleMapsService.equals + '5901 Montrose rd, Rockville, MD&'
      + 'key=' + GoogleMapsService.geoCodingKey);*/
  }

  /*public fetchData(url: string, body: any, params: any) {
    this.http.get(GoogleMapsService[url] + GoogleMapsService.jsonOutput)
  }*/
}
