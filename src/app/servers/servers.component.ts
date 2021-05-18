import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer:boolean = false;
serverCreationStatus = 'No server was created'
serverName = 'TestServer';
ServerCreated = false
servers = ['Testserver', 'TestSrever 2']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    
    },2000)
  }

  ngOnInit(): void {
  }
  onCreatServer(){
    this.serverCreationStatus = 'Server was created! Server name is: ' + this.serverName;
    this.ServerCreated = true
    this.servers.push(this.serverName)
  }
  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

