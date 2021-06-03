import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wald',
  templateUrl: './wald.component.html',
  styleUrls: ['./wald.component.css']
})
export class WaldComponent implements OnInit {
@Input() hana:{nom:string}={nom:''};
  constructor() { }

  ngOnInit(): void {
  }

}
