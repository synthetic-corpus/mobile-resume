/* Controls the header image with potrait, background etc at the top of the page */

import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpcallService } from '../services/httpCall.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  skillarray: string[];

  constructor(
    private httpcallService: HttpcallService
  ) { }

  ngOnInit() {
    this.httpcallService.getSkills()
      .subscribe(
        (response: Response) => {
          const skills = response.json();
          this.skillarray = skills;
        }
    );

  }


}
