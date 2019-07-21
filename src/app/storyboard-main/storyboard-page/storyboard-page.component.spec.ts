import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryboardPageComponent } from './storyboard-page.component';

describe('StoryboardPageComponent', () => {
  let component: StoryboardPageComponent;
  let fixture: ComponentFixture<StoryboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
