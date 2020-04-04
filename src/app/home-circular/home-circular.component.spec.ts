import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCircularComponent } from './home-circular.component';

describe('HomeCircularComponent', () => {
  let component: HomeCircularComponent;
  let fixture: ComponentFixture<HomeCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
