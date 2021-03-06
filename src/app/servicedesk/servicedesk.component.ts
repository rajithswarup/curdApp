import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicedesk',
  templateUrl: './servicedesk.component.html',
  styleUrls: ['./servicedesk.component.scss']
})
export class ServicedeskComponent{

  public data: any;

    constructor() {
        this.data = [
            { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
            { Value: 25, Label: "Residential", Summary: "Residential 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
            { Value: 18, Label: "Other", Summary: "Other 18%" }
        ];
    }

    public chartSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }


}
