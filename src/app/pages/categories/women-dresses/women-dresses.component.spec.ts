import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressesComponent } from './women-dresses.component';

describe('WomenDressesComponent', () => {
  let component: WomenDressesComponent;
  let fixture: ComponentFixture<WomenDressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenDressesComponent]
    });
    fixture = TestBed.createComponent(WomenDressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
