import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})
export class ProjectEntryComponent implements OnInit {
  style: string;
  @Input() entry: {title:string, webaddy:string, image:string, imgtag:string, description:string};
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
