import { Component, OnInit } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http:Http){
  }

  ngOnInit() {
  }
postForm(form : any)
  {
 
 
 this.http.post('http://127.0.0.1:5000',form)
 .subscribe(data => console.log(data));

  }
  
}
