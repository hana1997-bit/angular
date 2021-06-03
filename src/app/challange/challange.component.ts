import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challange',
  templateUrl: './challange.component.html',
  styleUrls: ['./challange.component.css']
})
export class ChallangeComponent implements OnInit {
   username=''
   hana=true
   chow=true
    aujourdhui = new Date();
    t=''
   arr:string[]=[]
   change=false


   display =false ;
  public items: string[] =[];
   day = new Date();
   text:string = "";

  constructor() { }

  ngOnInit(): void {
  }
  showw(){
    this.chow=!this.chow
    this.aujourdhui=new Date();
    this.t=''+this.aujourdhui
    console.log(this.chow)
    // console.log( this.aujourdhui);
    this.arr.push(this.t)
    // console.log(this.arr.length)
    // if (this.arr.length>4) {
    //   this.change=true
    // }
 
  }
 


  myfunction(data:any){
    console.log(data.data)
    if (data.target.value != '') {
      this.hana=false
    }
    else{
      this.hana=true

    }
  }
 
  reset(){
      this.username='';
      this.hana=true
  }
  view(){
    this.display=!this.display;
    this.day =new Date();
    this.text = ''+this.day;
    this.items.push(this.text)
    
  }
  color(event:any){
    return  event <5 ? 'white':'blue'; 
  }
}
