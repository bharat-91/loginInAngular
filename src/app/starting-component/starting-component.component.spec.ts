import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingComponentComponent } from './starting-component.component';

describe('StartingComponentComponent', () => {
  let component: StartingComponentComponent;
  let fixture: ComponentFixture<StartingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartingComponentComponent]
    });
    fixture = TestBed.createComponent(StartingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
