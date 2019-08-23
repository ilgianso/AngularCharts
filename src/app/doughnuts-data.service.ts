import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DoughnutsDataService {

  SERVER_URL: string = 'api/policies'

  constructor(
    private http: HttpClient,
  ) { }

  public getData() { 
    return this.http.get(this.SERVER_URL)
}

}
