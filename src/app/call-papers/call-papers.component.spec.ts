import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPapersComponent } from './call-papers.component';

describe('CallPapersComponent', () => {
  let component: CallPapersComponent;
  let fixture: ComponentFixture<CallPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
