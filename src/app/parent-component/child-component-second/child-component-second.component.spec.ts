import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentSecondComponent } from './child-component-second.component';

describe('ChildComponentSecondComponent', () => {
  let component: ChildComponentSecondComponent;
  let fixture: ComponentFixture<ChildComponentSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
