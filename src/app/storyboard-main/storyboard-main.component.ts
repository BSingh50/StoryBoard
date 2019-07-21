import { Component, OnInit } from '@angular/core';
import { StoryboardTabService } from './storyboard-tab-service';


@Component({
  selector: 'app-storyboard-main',
  templateUrl: './storyboard-main.component.html',
  styleUrls: ['./storyboard-main.component.scss']
})
export class StoryboardMainComponent implements OnInit {
  _storyBoardTabService: StoryboardTabService;
  tabCountOutputDuplicate: number;
  constructor(storyBoardTabService: StoryboardTabService) {
    this._storyBoardTabService = storyBoardTabService;
    console.log('existing tabs: ', this.tabCountOutputDuplicate);
    this.tabCountOutputDuplicate = this._storyBoardTabService.getTabValue("Tab");
    console.log('existing tabs in local storage: ', this._storyBoardTabService.getTabInLocal("Tab"));
  }

  ngOnInit() {
    
  }

  tabArray = Array;

  tabCountOutputParent($event){
    this.tabCountOutputDuplicate = $event;
    console.log("test", this.tabCountOutputDuplicate);
    this._storyBoardTabService.saveTabInLocal("Tab",this.tabCountOutputDuplicate);
    
  }

  clearTabs(){
    this._storyBoardTabService.clearTabsInLocal();
  }

  

  

}
