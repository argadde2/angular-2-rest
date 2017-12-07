import { Component, OnInit } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {ServerService} from '../server.service';
@Component({
  selector: 'app-postdelete',
  templateUrl: './postdelete.component.html',
  styleUrls: ['./postdelete.component.css']
})
export class PostdeleteComponent{
id : string;
id1 : string;
  constructor(private serverService : ServerService, private http:Http){
  }
  
  putForm(form : any)
  {
  this.http.put('http://127.0.0.1:5000/id/'+this.id,form)
 .subscribe(data => console.log(data));
  
  }

 deleteById()
  {
  this.http.delete('http://127.0.0.1:5000/id/'+this.id1).subscribe(data => console.log(data));
  }

}
