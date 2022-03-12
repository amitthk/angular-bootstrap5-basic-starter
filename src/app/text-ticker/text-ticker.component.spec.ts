import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTickerComponent } from './text-ticker.component';

describe('TextTickerComponent', () => {
  let component: TextTickerComponent;
  let fixture: ComponentFixture<TextTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
