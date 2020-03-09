import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstServiceComponent } from './first-service.component';

describe('FirstServiceComponent', () => {
  let component: FirstServiceComponent;
  let fixture: ComponentFixture<FirstServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
