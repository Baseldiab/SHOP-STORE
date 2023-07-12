import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWatchesComponent } from './womens-watches.component';

describe('WomensWatchesComponent', () => {
  let component: WomensWatchesComponent;
  let fixture: ComponentFixture<WomensWatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensWatchesComponent]
    });
    fixture = TestBed.createComponent(WomensWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
