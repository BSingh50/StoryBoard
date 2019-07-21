import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryboardMainComponent } from './storyboard-main/storyboard-main.component';
import { StoryboardPageComponent } from './storyboard-main/storyboard-page/storyboard-page.component';
import { StoryboardTabComponent } from './storyboard-main/storyboard-tab/storyboard-tab.component';
import { RouterModule } from '@angular/router';
import { StoryboardTabAddComponent } from './storyboard-main/storyboard-tab-add/storyboard-tab-add.component';
import { StoryboardTabService} from './storyboard-main/storyboard-tab-service';



@NgModule({
  declarations: [
    AppComponent,
    StoryboardMainComponent,
    StoryboardPageComponent,
    StoryboardTabComponent,
    StoryboardTabAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'storyboard-main', component: StoryboardMainComponent},
      {path: '',redirectTo: 'storyboard-main', pathMatch:'full' }
    ])
  ],
  providers: [StoryboardTabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
