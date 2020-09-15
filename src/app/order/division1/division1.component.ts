import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Detailget } from 'src/app/shared/detailget.model';
import { Item } from 'src/app/shared/item.model';
import { Job } from 'src/app/shared/job.model';
import { Order } from 'src/app/shared/order.model';
import { ServiceService } from 'src/app/shared/service.service';

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
  detailGet: Detailget[];

  ngOnInit(): void {
    this.service
      .getOrderList()
      .then((res) => (this.orderList = res as Order[]));

    this.service.getJobList().then((res) => (this.jobList = res as Job[]));

    this.service.getItemList().then((res) => (this.itemList = res as Item[]));
  }

  onSubmit(form: NgForm) {
    this.service.setDetail({
      ORDER_ID: form.value.OrderID,
      ITEM_ID: form.value.ItemID,
      JOB_ID: form.value.JobID,
    });

    this.detailGet = this.service.detailGet;
  }
}
