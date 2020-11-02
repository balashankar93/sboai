import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandraAwardComponent } from './chandra-award.component';

describe('ChandraAwardComponent', () => {
  let component: ChandraAwardComponent;
  let fixture: ComponentFixture<ChandraAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChandraAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandraAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
