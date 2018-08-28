import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianComponent } from './russian.component';

describe('RussianComponent', () => {
  let component: RussianComponent;
  let fixture: ComponentFixture<RussianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
