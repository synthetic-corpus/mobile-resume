import { Component, OnInit } from '@angular/core';

// Imports necessary to communicate with back end.
import { HttpcallService } from '../services/httpCall.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schoolarray: object[];
  constructor(
    private httpcallService: HttpcallService
  ) { }

  ngOnInit() {
    this.httpcallService.getSchools()
      .subscribe(
        (response: Response) => {
          const schools = response.json();
          this.schoolarray = schools;
        }
    );

  }

}
