import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryboardTabComponent } from './storyboard-tab.component';

describe('StoryboardTabComponent', () => {
  let component: StoryboardTabComponent;
  let fixture: ComponentFixture<StoryboardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryboardTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
