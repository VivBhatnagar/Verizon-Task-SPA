import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatTextComponent } from './float-text.component';

describe('FloatTextComponent', () => {
  let component: FloatTextComponent;
  let fixture: ComponentFixture<FloatTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
