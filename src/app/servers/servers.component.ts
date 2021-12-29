import { getLocaleDayNames } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  //PROPERTIES

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName:string = "";
  userName: string = "";
  allowUserName: boolean = false;
  serverCreated: boolean = false;
  servers = ["Server 01", "Server 02", "Server 03", "Server 04"];

  //EXCERSIZE
  buttonStatus: boolean = false;
  buttonClicks = []




  //METHODS

  showMessage() {
    this.buttonStatus = !this.buttonStatus;
    this.buttonClicks.push(this.buttonClicks.length + 1)
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    // this.serverCreationStatus = "Server was created name is " + this.serverName;
  };

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);


  }

  ngOnInit(): void {

  }






}
