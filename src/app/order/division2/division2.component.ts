import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/shared/detail.model';
import { Detailget } from 'src/app/shared/detailget.model';
import { Item } from 'src/app/shared/item.model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'detail',
  templateUrl: './division2.component.html',
  styleUrls: ['./division2.component.scss'],
})
export class Division2Component implements OnInit {
  constructor(private service: ServiceService) {}
  detailGet: Detailget[];
  detail: Detail;
  ngOnInit(): void {
    this.service.getDetail().then((res) => (this.rowData = res as Detailget[]));
  }

  columnDefs = [
    {
      headerName: 'Job ID',
      field: 'jobId',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    { headerName: 'Job No', field: 'jobNo', sortable: true, filter: true },
    { headerName: 'Item ID', field: 'itemId', sortable: true, filter: true },

    {
      headerName: 'Item Name',
      field: 'itemName',
      sortable: true,
      filter: true,
    },

    { headerName: 'UOM', field: 'uomId', sortable: true, filter: true },
    {
      headerName: 'Location',
      field: 'location_name',
      sortable: true,
      filter: true,
    },
    { headerName: 'STOCK', field: 'stock', sortable: true, filter: true },
    { headerName: 'Item Qty', field: 'itemQty', sortable: true, filter: true },
    {
      headerName: 'ALLOCATED QTY',
      field: 'allocatedQty',
      sortable: true,
      filter: true,
    },

    {
      headerName: 'CONSUME QTY',
      field: 'consumeQty',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'EXTRA_QTY',
      field: 'EXTRA_QTY',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'TO_BE_ALLOCATED_QTY',
      field: 'to_be_allocated_qty',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Allocate Qty',
      field: 'allocate_qty',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Deallocate Qty',
      field: 'de_allocate_qty',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Issue Qty',
      field: 'issue_qty',
      sortable: true,
      filter: true,
    },
  ];

  rowData;
}
