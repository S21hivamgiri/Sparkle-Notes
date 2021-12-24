import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemebarComponent } from './themebar.component';

describe('ThemebarComponent', () => {
  let component: ThemebarComponent;
  let fixture: ComponentFixture<ThemebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
