import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentFirstComponent } from './child-component-first.component';

describe('ChildComponentFirstComponent', () => {
  let component: ChildComponentFirstComponent;
  let fixture: ComponentFixture<ChildComponentFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
