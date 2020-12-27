import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  header = "Async Operations Using RxJS Observables";

  constructor() {}

  ngOnInit() {}
}
