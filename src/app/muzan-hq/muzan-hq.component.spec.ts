import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzanHQComponent } from './muzan-hq.component';

describe('MuzanHQComponent', () => {
  let component: MuzanHQComponent;
  let fixture: ComponentFixture<MuzanHQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuzanHQComponent]
    });
    fixture = TestBed.createComponent(MuzanHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
