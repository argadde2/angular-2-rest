import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {ServerService } from './server.service';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PostdeleteComponent } from './postdelete/postdelete.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const appRoutes: Routes = [
{ path : 'create',component : CreateComponent},
{ path : '' ,component : HomeComponent},
{ path : 'put',component : PostdeleteComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostdeleteComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
