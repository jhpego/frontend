import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content:any
  host: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }


  submitForm(){
    this.createRequest().subscribe( res => {
      console.log( res )
    })
  }

  listRequests(){
    this.getList().subscribe( res => {
      console.log( res )
    })
  }

  getList(){
    let urlQuery = `${this.host}list/`;
    return this.http.get<any>(urlQuery);  
  }

  createRequest(){
    console.log('new Request: ', this.content)
    let urlQuery = `${this.host}insert/${encodeURI(this.content)}`;
    return this.http.get<any>(urlQuery);  
  }


}
