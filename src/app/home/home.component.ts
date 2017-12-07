import { Component, OnInit } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
id : string;
servers = [];
server1: {};
error :{};
responseStatus: number;
  constructor(private serverService : ServerService, private http:Http){
  }

  onClicklist()
  {
  this.serverService.getServerList()
   .subscribe(
  (servers : any[]) => this.servers = servers,
  (error) => console.log(error)
  );
  }
  
  onClickId()
  {
  
this.http.get('http://127.0.0.1:5000/id/'+this.id)
.subscribe(
(server1 : any )=> this.server1 = server1,
(error)=> this.error=JSON.stringify(error)
);

  }
  

}
