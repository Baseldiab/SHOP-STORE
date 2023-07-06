import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenBagsComponent } from './women-bags.component';

describe('WomenBagsComponent', () => {
  let component: WomenBagsComponent;
  let fixture: ComponentFixture<WomenBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenBagsComponent]
    });
    fixture = TestBed.createComponent(WomenBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
