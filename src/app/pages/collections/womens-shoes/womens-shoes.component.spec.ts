import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensShoesComponent } from './womens-shoes.component';

describe('WomensShoesComponent', () => {
  let component: WomensShoesComponent;
  let fixture: ComponentFixture<WomensShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensShoesComponent]
    });
    fixture = TestBed.createComponent(WomensShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
