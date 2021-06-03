import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() element : {type:string , name : string, content:string}={type:'',name:'',content:''}
  @Output() servercreated = new EventEmitter();
 newservername='';
 newservercontent='';
  constructor() { }

  ngOnInit(): void {
  }
  addserver(){
    this.servercreated.emit({
    servername: this.newservername,
    servercontent: this.newservercontent
    });
  }

}
