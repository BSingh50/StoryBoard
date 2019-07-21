import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryboardMainComponent } from './storyboard-main.component';

describe('StoryboardMainComponent', () => {
  let component: StoryboardMainComponent;
  let fixture: ComponentFixture<StoryboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
