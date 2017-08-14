import { Component, OnInit } from '@angular/core';
// Imports necessary to communicate with back end.
import { HttpcallService } from '../services/httpCall.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  workarray: object[];
  constructor(private httpcall: HttpcallService ) { }

  ngOnInit() {
    this.httpcall.getWork()
      .subscribe(
        (response: Response) => {
          const work = response.json();
          this.workarray = work;
        }
      )
  }
}
