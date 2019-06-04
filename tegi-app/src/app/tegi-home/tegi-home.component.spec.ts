import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TegiHomeComponent } from './tegi-home.component';

describe('TegiHomeComponent', () => {
  let component: TegiHomeComponent;
  let fixture: ComponentFixture<TegiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TegiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
