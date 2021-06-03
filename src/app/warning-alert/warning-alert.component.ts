import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  message = 'attention tu es en alert !!!'
  serverId = 3
  allowShow:boolean = false
  serverName = 'hana server'
  constructor() { }

  ngOnInit(): void {
  }

  typeDalert(){
    return 'le serveur est en panne'
  }

  sameFunction(){
    this.allowShow = !this.allowShow
  }
}
