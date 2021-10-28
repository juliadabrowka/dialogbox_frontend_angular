import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class DataService {
  serviceUrl:string = "http://127.0.0.1:8000";
  

  constructor(private http: HttpClient) {
    }

  getMainPage(){
    const url = `${this.serviceUrl}/main-page/`;
    return this.http.get(url);
  }

  getActivePage(){
    const url = `${this.serviceUrl}/serie/`;
    return this.http.get(url)
  }

  getSeriePage(slug: string){
    const url = `${this.serviceUrl}/serie/${slug}`;
    return this.http.get(url)
  }

  ngOnInit(): void {
  }

}
