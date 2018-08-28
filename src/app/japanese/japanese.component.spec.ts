import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseComponent } from './japanese.component';

describe('JapaneseComponent', () => {
  let component: JapaneseComponent;
  let fixture: ComponentFixture<JapaneseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
