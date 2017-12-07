import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ServerService
{
constructor(private http: Http)
{
}

getServerList()
{
return this.http.get('http://127.0.0.1:5000/list')
.map(
(response : Response) => {
const data = response.json();
return data;
}
);

}

}