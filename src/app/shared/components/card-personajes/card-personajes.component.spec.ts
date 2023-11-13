import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonajesComponent } from './card-personajes.component';

describe('CardPersonajesComponent', () => {
  let component: CardPersonajesComponent;
  let fixture: ComponentFixture<CardPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonajesComponent]
    });
    fixture = TestBed.createComponent(CardPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
