import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boo',
  templateUrl: './boo.component.html',
  styleUrls: ['./boo.component.css']
})
export class BooComponent implements OnInit {
 noms=[
   {nom:"hana"},
   {nom:"hana1"},
   {nom:"hana2"}
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
