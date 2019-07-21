import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storyboard-tab',
  templateUrl: './storyboard-tab.component.html',
  styleUrls: ['./storyboard-tab.component.scss']
})
export class StoryboardTabComponent implements OnInit {
  storyboardTitle: string;
  enterKeyPressed: boolean = false;
  //tabArray: Array<number> = [];

  constructor() {

   }

  ngOnInit() {
  }

  onKeydown(event){
    if(event.key == "Enter"){
        this.enterKeyPressed = true;
    }
  }

  editTab(event){
    this.enterKeyPressed = false;
  }

  // openPage(){
    
  // }



  


}
