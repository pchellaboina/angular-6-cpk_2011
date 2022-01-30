// src/app/my-grid-application/my-grid-application.component.ts
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class MyGridApplicationComponent {
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      // enable filtering
      enableFilter: true,
    };
    this.gridOptions.columnDefs = [
      {
        headerName: 'Asset Name',
        minWidth: 150,
        width: 250,
        field: 'assetName',
        cellRendererFramework: RouterLinkRendererComponent,
        cellRendererParams: {
          inRouterLink: '[/assets/details/]',
        },
      },
      {
        headerName: 'Asset Id',
        field: 'assetId',
        width: 100,
      },
    ];
    this.gridOptions.rowData = [
      { assetId: 5, assetName: 'Five' },
      { assetId: 10, assetName: 'Ten' },
      { assetId: 15, assetName: 'Fifteen' },
    ];
  }
}
