import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalPresentationComponent } from './postal-presentation.component';

describe('PostalPresentationComponent', () => {
  let component: PostalPresentationComponent;
  let fixture: ComponentFixture<PostalPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
