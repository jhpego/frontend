import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


type Request = {
  id?: string,
  action: string,
  status: number,
  input: any,
  output?: any,
}

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
    this.listenWebsocket(); 
  }


  submitForm(){
    this.createRequest().subscribe( res => {
      // console.log( res )
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
    // console.log('new Request: ', this.content)
    let newRequest: Request = {
      action: 'screenshot',
      status: -1,
      input: JSON.stringify({
        text: this.content
      })
    }
    let urlQuery = `${this.host}/request`;
    let reqBody = newRequest;



    return this.http.post<any>(urlQuery, reqBody);  
  }


  listenWebsocket = () => {
    var url = "pegonet-nodered.eu-gb.mybluemix.net"
    var incomingUrl = `ws://${url}/ws`

      
      // Let us open a web socket 
      var ws = new WebSocket(incomingUrl);

      ws.onopen = function() {
          
         // Web Socket is connected, send data using send()
        //  ws.send("Message to send");
        //  console.log("ws connected...");
      };

      ws.onmessage = function (evt) { 
         var received_msg = evt.data;
         console.log("Message is received...", received_msg);
      };

      ws.onclose = function() { 
         // websocket is closed.
         console.warn("Connection is closed..."); 
      };

  }



}
