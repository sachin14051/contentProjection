import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss']
})
export class TabComponentComponent implements OnInit {
  msg : boolean =false
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.msg = !this.msg
 }

}
