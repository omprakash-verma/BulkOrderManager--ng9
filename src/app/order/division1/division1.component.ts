import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Detailget } from 'src/app/shared/detailget.model';
import { Item } from 'src/app/shared/item.model';
import { Job } from 'src/app/shared/job.model';
import { Order } from 'src/app/shared/order.model';
import { ServiceService } from 'src/app/shared/service.service';
import { Store } from 'src/app/shared/store.model';
import { Location } from 'src/app/shared/location.model';

@Component({
  selector: 'master',
  templateUrl: './division1.component.html',
  styleUrls: ['./division1.component.scss'],
})
export class Division1Component implements OnInit {
  constructor(private service: ServiceService) {}

  orderList: Order[];
  itemList: Item[];
  jobList: Job[];
  itemGroupList: Item[];
  summaryItemList: Item[];
  locationList: Location[];
  storeList: any;
  detailGet: Detailget[];

  SO_ID: string;
  ITEM_ID: string;
  JOB_ID: string;
  LOCATION_ID: string;
  STORE_ID: string;

  ngOnInit(): void {
    this.initialData();
  }

  async initialData() {
    const data = await this.service.getDropdownData();
    console.log(data);
    this.orderList = data['order'];
    this.jobList = data['job'];

    this.itemGroupList = data['ItmGroups'];
    this.locationList = data['location'];
    console.log(this.locationList);
    this.storeList = data['store'];
  }

  onOrderChange(SO_ID) {
    this.service
      .getJobOnOrder(SO_ID)
      .then((data) => (this.jobList = data['job']));
    this.service
      .getItemOnOrder(SO_ID)
      .then((data) => (this.itemList = data['result']));
  }

  onItemGroupChange(ITEM_GROUP_ID) {
    if (ITEM_GROUP_ID == '') {
      this.initialData();
    } else {
      this.orderList = null;
      this.service
        .getSummaryItemOnItemGroup(ITEM_GROUP_ID)
        .then((data) => (this.summaryItemList = data['SummaryList']));
    }
  }

  onSummaryItemChange(SUMMARY_ITEM_ID) {
    console.log(SUMMARY_ITEM_ID);
    this.service
      .getItemOnSummaryItem(SUMMARY_ITEM_ID)
      .then((data) => (this.itemList = data['result']));
  }

  onSubmit() {
    this.service.SO_ID = this.SO_ID;
    this.service.ITEM_ID = this.ITEM_ID;
    this.service.JOB_ID = this.JOB_ID;
    this.service.LOCATION_ID = this.LOCATION_ID;
    this.service.STORE_ID = this.STORE_ID;
    this.service.onDiv1ComponentButtonClick();
  }

  onProceed() {
    this.service.onDiv1ComponentButton2Click();
  }
}
