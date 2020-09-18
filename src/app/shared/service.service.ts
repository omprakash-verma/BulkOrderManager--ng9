import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
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

  SO_ID: string;
  ITEM_ID: string;
  JOB_ID: string;
  LOCATION_ID: string;
  STORE_ID: string;
  myGrid;

  invokeDiv2ComponentFunction = new EventEmitter();
  subsVar: Subscription;

  invokeDiv2ComponentFunction2 = new EventEmitter();
  subsVar2: Subscription;

  constructor(private http: HttpClient) {}

  onDiv1ComponentButtonClick() {
    this.invokeDiv2ComponentFunction.emit();
  }

  onDiv1ComponentButton2Click() {
    this.invokeDiv2ComponentFunction2.emit();
  }

  getDropdownData() {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {})
      .toPromise();
  }

  getJobOnOrder(SO_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'job',
        p_orderID: SO_ID,
      })
      .toPromise();
  }

  getItemOnOrder(SO_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'item',
        p_orderID: SO_ID,
      })
      .toPromise();
  }

  getSummaryItemOnItemGroup(ITEM_GROUP_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'SUMMARY_ITEM',
        p_itemgrptypeID: ITEM_GROUP_ID,
      })
      .toPromise();
  }

  getItemOnSummaryItem(SUMMARY_ITEM_ID) {
    console.log(SUMMARY_ITEM_ID);
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'ITEM',
        p_summary_itemID: SUMMARY_ITEM_ID,
      })
      .toPromise();
  }

  getOrder() {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'order',
      })
      .toPromise();
  }

  getGrid(SO_ID, ITEM_ID, JOB_ID, LOCATION_ID, STORE_ID) {
    return this.http
      .post(environment.apiURL + 'GetValue', {
        p_orderID: SO_ID,
        p_itemID: ITEM_ID,
        p_jobID: JOB_ID,
        p_locationID: LOCATION_ID,
        p_storeID: STORE_ID,
      })
      .toPromise();
  }
}
