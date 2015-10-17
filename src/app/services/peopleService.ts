//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
  people:any;
  constructor(http:Http) {
    this.people = http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
  }
  getPeople():any {
    return this.people;
  }
} 