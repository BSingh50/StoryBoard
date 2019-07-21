import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryboardTabAddComponent } from './storyboard-tab-add.component';

describe('StoryboardTabAddComponent', () => {
  let component: StoryboardTabAddComponent;
  let fixture: ComponentFixture<StoryboardTabAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryboardTabAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryboardTabAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
