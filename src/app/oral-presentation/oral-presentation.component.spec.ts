import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralPresentationComponent } from './oral-presentation.component';

describe('OralPresentationComponent', () => {
  let component: OralPresentationComponent;
  let fixture: ComponentFixture<OralPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
