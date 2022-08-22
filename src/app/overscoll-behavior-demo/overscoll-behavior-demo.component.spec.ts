import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverscollBehaviorDemoComponent } from './overscoll-behavior-demo.component';

describe('OverscollBehaviorDemoComponent', () => {
  let component: OverscollBehaviorDemoComponent;
  let fixture: ComponentFixture<OverscollBehaviorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverscollBehaviorDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverscollBehaviorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
