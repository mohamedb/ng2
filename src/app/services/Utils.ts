import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class FrDatetime {
  dateD:Date= new Date();
  
  constructor(){
    
  }
  
  setDate(dateD:Date){
    this.dateD=dateD;
    return this;
  }
  
  toString():string{
   var yyyy = this.dateD.getFullYear().toString();
   var mm = (this.dateD.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.dateD.getDate().toString();  
   var minute = this.dateD.getMinutes();
   var hour = this.dateD.getHours();
   return " "+hour+":"+minute + " "+(dd[1]?dd:"0"+dd[0]) +'-'+ (mm[1]?mm:"0"+mm[0]) +'-'+yyyy ; // padding
  }
   
}
