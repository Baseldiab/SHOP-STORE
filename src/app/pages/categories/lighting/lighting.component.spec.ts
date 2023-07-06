import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingComponent } from './lighting.component';

describe('LightingComponent', () => {
  let component: LightingComponent;
  let fixture: ComponentFixture<LightingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightingComponent]
    });
    fixture = TestBed.createComponent(LightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
