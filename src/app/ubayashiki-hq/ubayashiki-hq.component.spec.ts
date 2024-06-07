import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbayashikiHQComponent } from './ubayashiki-hq.component';

describe('UbayashikiHQComponent', () => {
  let component: UbayashikiHQComponent;
  let fixture: ComponentFixture<UbayashikiHQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbayashikiHQComponent]
    });
    fixture = TestBed.createComponent(UbayashikiHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
