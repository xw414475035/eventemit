import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',

  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();
  
  clickchild(){
    this.clicked.emit('Message from Child');
  
  }


  constructor() { }

  ngOnInit() {

   
  }

}
