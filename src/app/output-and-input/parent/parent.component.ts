import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  serverElements = [
    {type: 'server', name: 'testserver', content : 'just a test'},
    {type: 'server', name: 'hana server', content : 'not a test'},
    {type: 'server', name: 'hamza server', content : 'not a test'}

  ]

  constructor() { }

  ngOnInit(): void {
  }
  addservers(data:{servername:string,servercontent:string}) {
    this.serverElements.push(
      { type : 'server',
        name: data.servername,
      content:data.servercontent});
  }

}
