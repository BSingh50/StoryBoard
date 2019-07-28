import { Component, OnInit } from '@angular/core';
import { StoryboardTabService } from './storyboard-tab-service';
import { isNull } from 'util';


@Component({
  selector: 'app-storyboard-main',
  templateUrl: './storyboard-main.component.html',
  styleUrls: ['./storyboard-main.component.scss']
})
export class StoryboardMainComponent implements OnInit {
  _storyBoardTabService: StoryboardTabService;
  tabCountOutputDuplicate: number;
  currentSavedTabs: number;
  constructor(storyBoardTabService: StoryboardTabService) {
    this._storyBoardTabService = storyBoardTabService;

    if(this._storyBoardTabService.getTabValue("Tab") == 0 || this._storyBoardTabService.getTabValue("Tab") == null){
      this.tabCountOutputDuplicate = 1;
    }
    else{
      this.tabCountOutputDuplicate = this._storyBoardTabService.getTabValue("Tab");
    }
    this._storyBoardTabService.saveTabInLocal("Tab",this.tabCountOutputDuplicate);
     
    console.log('current saved tabs ', this.currentSavedTabs);
    
  }

  ngOnInit() {
    
  }

  tabArray = Array;

  tabCountOutputParent($event){
    this.tabCountOutputDuplicate = $event + this._storyBoardTabService.getTabValue("Tab");
    console.log("event ",$event);
    this._storyBoardTabService.saveTabInLocal("Tab",this.tabCountOutputDuplicate);
    
    
  }

  clearTabs(){
    this._storyBoardTabService.clearTabsInLocal();
  }

  

  

}
