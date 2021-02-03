import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contry } from './contry';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseURL: string = "https://restcountries.eu/rest/v2";


  constructor(private http: HttpClient) {  }

  getContries(): Observable<Contry[]> {
    return this.http.get<Contry[]>(this.baseURL + '/all');
  }

  getContriesByRegion(region: string): Observable<Contry[]> {
    return this.http.get<Contry[]>(this.baseURL + '/region/'+region);
  }

  getContriesByname(name: string): Observable<Contry[]> {
    return this.http.get<Contry[]>(this.baseURL + '/name/'+name+'?fullText=true');

  }



  
}
