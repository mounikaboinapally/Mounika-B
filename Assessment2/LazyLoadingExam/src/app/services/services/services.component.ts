import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  optionValue: number | undefined;

  public selectTab(val: number) {
    this.optionValue = val;
  }

  title = "SNAD Developers";

  success_msg = true;






  constructor() { }

  ngOnInit(): void {

  }

}
