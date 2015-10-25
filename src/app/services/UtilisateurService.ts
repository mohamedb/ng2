//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class UtilisateurService {
  dataUrl:string='app/data/users.json';
  utilisateurs:any;
  constructor(http:Http) {
    this.utilisateurs = http.get(this.dataUrl).map(res => res.json());
  }
  getUtilisateurs():any {
    return this.utilisateurs;
  }
} 