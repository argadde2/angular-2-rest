import { Component } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
id : string;
  title = 'app';
servers = [];


  constructor(){
  }
  
}
