
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class CheckinService {
  constructor(private http: HttpClient) {}
  url = "http://210.1.54.9/CheckInApi/api/activity/SelectActivity";
 //  url = "http://localhost:7580/api/activity/SelectActivity";
  private httpOptions = {
    headers: new HttpHeaders({
      "api-key": "1234",
      'Content-Type': 'application/json'
    })
  };
  getActivity() {
    return this.http.get(this.url,this.httpOptions);
  }

  // Error handling
  private handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
export interface Activitys {
  activityID: number;
  activityName: string;
  freeFlag: boolean;
  type: string;
  subjectFlag: boolean;
}