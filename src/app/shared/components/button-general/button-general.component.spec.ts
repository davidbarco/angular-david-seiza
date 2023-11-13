import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGeneralComponent } from './button-general.component';

describe('ButtonGeneralComponent', () => {
  let component: ButtonGeneralComponent;
  let fixture: ComponentFixture<ButtonGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGeneralComponent]
    });
    fixture = TestBed.createComponent(ButtonGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
