import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl = 'https://api.stackexchange.com/2.2/search/advanced';

  constructor(
    private http: HttpClient,
  ) { }


  /**
   * @description generate the params needed for the api call to banner api.
   * @param email email of the student logged in.
   */
  private generateParams(data) {
    return {
      order: data.order,
      sort: data.sort,
      tagged: data.tagged,
      title: data.title,
      site: data.site
    };
  }


  /**
	 * @description Execute the get method.
	 * @param apiUrl url of the api to be called.
   * @param data data to generate the query params.
	 * @param successCallback succes callback for the api call function.
	 * @param failureCallback failure callback for the api call function.
	 */
  public getQuestions(data, successCallback, failureCallback) {
    const _params = this.generateParams(data);
    this.http.get(this.apiUrl, {
      params: _params, observe: 'response'
      })
      .toPromise()
      .then(response => {
        successCallback(response.body);
      }).catch(error => {
        failureCallback(error);
      });
    }
}
