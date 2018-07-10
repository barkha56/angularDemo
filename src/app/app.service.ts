import {
  Injectable
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient
  ) { }


adduser():Observable<Request>
{
  
  return ;
}
  getUser(): Observable<Response> {
    // ...using get request
    return this.http.get("http://localhost:8080/demo/all").pipe(map((res: Response) => res));
   

  }
}


