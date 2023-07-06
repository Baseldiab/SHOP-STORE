import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenBagsComponent } from './men-bags.component';

describe('MenBagsComponent', () => {
  let component: MenBagsComponent;
  let fixture: ComponentFixture<MenBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenBagsComponent]
    });
    fixture = TestBed.createComponent(MenBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
