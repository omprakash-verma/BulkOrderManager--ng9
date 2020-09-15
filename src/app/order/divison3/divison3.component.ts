import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { Job } from 'src/app/shared/job.model';
import { Order } from 'src/app/shared/order.model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'sample',
  templateUrl: './divison3.component.html',
  styles: [],
})
export class Divison3Component implements OnInit {
  orderList: Order[];
  itemList: Item[];
  jobList: Job[];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {}
}
