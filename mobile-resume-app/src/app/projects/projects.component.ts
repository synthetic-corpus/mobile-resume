/* Pulls respective data from Firebase backend.
   Inputs data into child components. */

import { Component, OnInit } from '@angular/core';
import { HttpcallService } from '../services/httpCall.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectarray: object[];
  constructor(
    private httpcallService: HttpcallService
  ) { }

  ngOnInit() {
    this.httpcallService.getProjects()
      .subscribe(
        (response: Response) => {
          const projects = response.json();
          this.projectarray = projects;
        }
    );
  }

}
