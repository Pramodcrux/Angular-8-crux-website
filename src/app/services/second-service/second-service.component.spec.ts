import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondServiceComponent } from './second-service.component';

describe('SecondServiceComponent', () => {
  let component: SecondServiceComponent;
  let fixture: ComponentFixture<SecondServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
