import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content:any
  host: string = 'https://pegonet-nodered.eu-gb.mybluemix.net'

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
    let urlQuery = `${this.host}/requests/`;
    return this.http.get<any>(urlQuery);  
  }

  createRequest(){
    console.log('new Request: ', this.content)
    let urlQuery = `${this.host}/request`;

    // let sample = [
    //   {
    //     "id": "8n1QTUNBVL630KhOZxVq",
    //     "data": {
    //       "input": "/filmes/assistir-10-coisas-que-deveriamos-fazer-antes-de-nos-separar-online-hd-dublado/",
    //       "output": "{\"input\":\"/filmes/assistir-10-coisas-que-deveriamos-fazer-antes-de-nos-separar-online-hd-dublado/\",\"name\":\"pobreflix.getVideo\"}",
    //       "status": 1,
    //       "date": { "seconds": 1593305604, "nanoseconds": 279000000 },
    //       "action": "pobreflix.getVideo"
    //     }
    //   }
    // ];




    let reqBody = {
      text: this.content,
    };
    return this.http.post<any>(urlQuery, reqBody);  
  }


}
