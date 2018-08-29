import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishComponent } from './english.component';

describe('EnglishComponent', () => {
  let component: EnglishComponent;
  let fixture: ComponentFixture<EnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
