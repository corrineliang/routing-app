import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyCssComponent } from './sticky-css.component';

describe('StickyCssComponent', () => {
  let component: StickyCssComponent;
  let fixture: ComponentFixture<StickyCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
