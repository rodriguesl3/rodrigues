import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private _experienceUrl = './api/experience.json';
  private _fwkUrl = './api/fwkExperience.json';
  constructor(private _http: HttpClient) { }


  getExperiences(): Observable<any[]> {
    return this._http.get<any[]>(this._experienceUrl);
  }

  getFrameworksExperience(): Observable<any[]> {
    return this._http.get<any[]>(this._fwkUrl);
  }

}
