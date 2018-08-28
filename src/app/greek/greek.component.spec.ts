import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekComponent } from './greek.component';

describe('GreekComponent', () => {
  let component: GreekComponent;
  let fixture: ComponentFixture<GreekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
