import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpcallService {

  constructor(private http: Http) { }

  // Pulls from person site back ed.

  getSchools(){
    return this.http.get('https://personal-site-backend.firebaseio.com/education.json');
  }

  getWork(){
    return this.http.get('https://personal-site-backend.firebaseio.com/work.json')
  }

  getProjects(){
    return this.http.get('https://personal-site-backend.firebaseio.com/projects.json')
  }

  getSkills(){
    return this.http.get('https://personal-site-backend.firebaseio.com/skills.json')
  }

}
