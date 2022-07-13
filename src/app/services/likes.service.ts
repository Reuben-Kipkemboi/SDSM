import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LikesService {
  apiUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  // get all likes
  getLikes(): Observable<any>{
    return this.http.get(environment.apiUrl+'/all_likes/')
  }


}
