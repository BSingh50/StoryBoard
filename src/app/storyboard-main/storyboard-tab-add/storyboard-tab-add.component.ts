import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'storyboard-tab-add',
  templateUrl: './storyboard-tab-add.component.html',
  styleUrls: ['./storyboard-tab-add.component.scss']
})
export class StoryboardTabAddComponent implements OnInit {
  @Output() tabCountOutput = new EventEmitter<number>();
  //@Input() childCurrentSavedTabs: number;
  numberOfTabs: number = 1;
  tabArray = Array;
  
  constructor() {

  }

  ngOnInit() {
  }



  addTab(){
    this.tabCountOutput.emit(this.numberOfTabs);
    console.log(this.numberOfTabs);
  }


}
