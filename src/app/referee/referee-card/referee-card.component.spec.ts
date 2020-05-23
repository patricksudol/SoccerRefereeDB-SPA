import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeCardComponent } from './referee-card.component';

describe('RefereeCardComponent', () => {
  let component: RefereeCardComponent;
  let fixture: ComponentFixture<RefereeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
