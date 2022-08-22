import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGridDemoComponent } from './sub-grid-demo.component';

describe('SubGridDemoComponent', () => {
  let component: SubGridDemoComponent;
  let fixture: ComponentFixture<SubGridDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubGridDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
