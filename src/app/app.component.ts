// src/app/my-grid-application/my-grid-application.component.ts
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RouterLinkRendererComponent } from './router-link-renderer/router-link-renderer.component';

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
      { id: 5, value: 10 },
      { id: 10, value: 15 },
      { id: 15, value: 20 },
    ];
  }
}
