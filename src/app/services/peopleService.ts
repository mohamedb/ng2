//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
  dataUrl:string='app/data/users.json';
  people:any;
  constructor(http:Http) {
    this.people = http.get(this.dataUrl).map(res => res.json());
  }
  getPeople():any {
    return this.people;
  }
} 