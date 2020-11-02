import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardUniversityComponent } from './award-university.component';

describe('AwardUniversityComponent', () => {
  let component: AwardUniversityComponent;
  let fixture: ComponentFixture<AwardUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
