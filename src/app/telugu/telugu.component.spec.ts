import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguComponent } from './telugu.component';

describe('TeluguComponent', () => {
  let component: TeluguComponent;
  let fixture: ComponentFixture<TeluguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeluguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeluguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
