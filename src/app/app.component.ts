import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RouterLinkRendererComponent } from './router-link-renderer/router-link-renderer.component';

@Component({
  selector: 'my-app',
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
      { assetId: 5, assetName: 'Five' },
      { assetId: 10, assetName: 'Ten' },
      { assetId: 15, assetName: 'Fifteen' },
    ];
  }
}
