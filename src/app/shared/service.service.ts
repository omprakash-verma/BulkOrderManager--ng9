import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Detail } from './detail.model';
import { Detailget } from './detailget.model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ServiceService {
  detail: Detail;
  detailGet: Detailget[];

  constructor(private http: HttpClient) {}
  getItemList() {
    return this.http.get(environment.apiURL + '/item').toPromise();
  }

  getJobList() {
    return this.http.get(environment.apiURL + '/job').toPromise();
  }

  getOrderList() {
    return this.http.get(environment.apiURL + '/order').toPromise();
  }

  setDetail(body: Detail) {
    this.detail = body;
    this.getDetail().then((res) => (this.detailGet = res as Detailget[]));
    this.getEmpty();
    return this.detailGet;
  }

  getDetail() {
    const httpOptions = new HttpHeaders();
    httpOptions.append('content-type', 'application/json');

    const body = {
      p_orderID: 5,
      p_itemID: 1867,
      p_jobID: 2925,
      p_locationID: 3847,
      p_storeID: 'SUBEDAR SINGH (CUTTING)',
    };
    return this.http
      .post(environment.apiURL + '/bulkallocation/GetValue', body, {
        headers: httpOptions,
      })
      .toPromise();
  }

  getEmpty() {
    if (this.detailGet != null) {
      console.log('Hello');
    }
  }
}
