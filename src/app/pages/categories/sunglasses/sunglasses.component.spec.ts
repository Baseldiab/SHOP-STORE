import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassesComponent } from './sunglasses.component';

describe('SunglassesComponent', () => {
  let component: SunglassesComponent;
  let fixture: ComponentFixture<SunglassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunglassesComponent]
    });
    fixture = TestBed.createComponent(SunglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
