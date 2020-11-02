import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbaoiAwardComponent } from './sbaoi-award.component';

describe('SbaoiAwardComponent', () => {
  let component: SbaoiAwardComponent;
  let fixture: ComponentFixture<SbaoiAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbaoiAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbaoiAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
