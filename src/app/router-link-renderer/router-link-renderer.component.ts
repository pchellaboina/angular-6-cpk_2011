import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AgRendererComponent } from 'ag-grid-angular';
/* This commented code needs to be added in the template
  <a *ngIf="dataItem.assetStatus === 0"
  [routerLink]="['/assets/details/'+dataItem.assetId]">{{dataItem.assetName}}</a>
  <span *ngIf="dataItem.assetStatus === 1">{{dataItem.assetName}}</span>*/
@Component({
  template: `<a [routerLink]="[params.inRouterLink,params.value]"  (click)="navigate(params.inRouterLink)">{{params.data.value}}</a>`,
})
export class RouterLinkRendererComponent implements AgRendererComponent {
  params: any;

  constructor(private ngZone: NgZone, private router: Router) {}

  agInit(params: any): void {
    console.log(params);
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  // This was needed to make the link work correctly
  navigate(link) {
    this.ngZone.run(() => {
      this.router.navigate([link, this.params.value]);
    });
  }
}
