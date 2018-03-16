import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookSerService {

  constructor(private service:Http) { }

  getUser():Observable<any[]>{
    return this.service.get('/api/getBooks')
                    .map(data => data.json());
                    
    
  }

  getBooks(){
    return this.service.get('api/getBooks').map(result =>this.service = result.json().data)
  }
}
