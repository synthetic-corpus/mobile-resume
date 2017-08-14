import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.css']
})
export class EducationEntryComponent implements OnInit {

  style: string;
  @Input() entry: {name:string, webaddy:string, icon:string, graduation:string, summary:string};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    // used to alternate background colors.
    if (this.index % 2 === 0){
      this.style = "row light-tan";
    }
    else{
      this.style = "row tan";
    }
  }

}
