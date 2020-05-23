import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeLandingComponent } from './referee-landing.component';

describe('RefereeLandingComponent', () => {
  let component: RefereeLandingComponent;
  let fixture: ComponentFixture<RefereeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
