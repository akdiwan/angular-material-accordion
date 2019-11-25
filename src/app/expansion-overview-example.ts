import { Component } from "@angular/core";
/**
 * @title Angular Material Accordian with Radio Button
 */
@Component({
  selector: "expansion-overview-example",
  templateUrl: "expansion-overview-example.html",
  styleUrls: ["expansion-overview-example.css"]
})
export class ExpansionOverviewExample {
  panelOpenState = false;

    perfSlas = [
    {
      name: "SLA_1",
      threshHolds: ["1", "2", "3"]
    },
    {
      name: "SLA_2",
      threshHolds: ["1", "2", "3", "4"]
    }
  ];
}
