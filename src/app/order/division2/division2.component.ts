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

  columnDefs = [
    {
      headerName: 'Job ID',
      field: 'jobId',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'Job No',
      field: 'jobNo',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      resizable: true,
    },
    {
      headerName: 'Item ID',
      field: 'itemId',
      sortable: true,
      filter: true,
      hide: true,
    },

    {
      headerName: 'Item',
      field: 'itemName',
      sortable: true,
      filter: true,
      resizable: true,
    },

    {
      headerName: 'UOM',
      field: 'uomId',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'UOM',
      field: 'UOM',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'storeId',
      field: 'STORE_ID',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'Store',
      field: 'STORE_NAME',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Free Stock',
      field: 'FREE_STOCK',
      sortable: true,
      filter: true,
    },
    { headerName: 'Item Qty', field: 'itemQty', sortable: true, filter: true },
    {
      headerName: 'Allocated Qty',
      field: 'allocatedQty',
      sortable: true,
      filter: true,
    },

    {
      headerName: 'Consume Qty',
      field: 'consume_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Extra Qty',
      field: 'EXTRA_QTY',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'To Be Allocated Qty',
      field: 'to_be_allocated_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Allocate Qty',
      field: 'allocate_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Deallocate Qty',
      field: 'de_allocate_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Issue Qty',
      field: 'issue_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];

  rowData;

  ngOnInit(): void {
    if (this.service.subsVar == undefined) {
      this.service.subsVar = this.service.invokeDiv2ComponentFunction.subscribe(
        (name: string) => {
          this.getGridData(
            this.service.SO_ID,
            this.service.ITEM_ID,
            this.service.JOB_ID,
            this.service.LOCATION_ID,
            this.service.STORE_ID
          );
        }
      );
    }

    if (this.service.subsVar2 == undefined) {
      this.service.subsVar2 = this.service.invokeDiv2ComponentFunction2.subscribe(
        () => {
          this.getSelectedRows(this.service.myGrid);
        }
      );
    }
  }

  async getGridData(SO_ID, ITEM_ID, JOB_ID, LOCATION_ID, STORE_ID) {
    const data = await this.service.getGrid(
      SO_ID,
      ITEM_ID,
      JOB_ID,
      LOCATION_ID,
      STORE_ID
    );
    if (data['result'] == 'no data') {
      alert(data['usrMsg']);
    } else {
      this.rowData = data['result'];
    }
  }

  getSelectedRows(myGrid) {
    console.log('Hello');
    let selectedNodes = myGrid.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
  }

  onGridReady(myGrid) {
    console.log('yo');
    this.service.myGrid = myGrid.api;
  }
}
