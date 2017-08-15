import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-entry',
  templateUrl: './work-entry.component.html',
  styleUrls: ['./work-entry.component.css']
})
export class WorkEntryComponent implements OnInit {
  style: string;
  @Input() entry: {workplace:string, logo: string, webaddy:string, message:string, location:string, position:string, tenure:string, duties:[string]};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    // used to alternate background colors.
    if (this.index % 2 === 0){
      this.style = "light-tan";
    }
    else{
      this.style = "tan";
    }
  }

}
