import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationHomepageComponent } from './homepage.component';

describe('AnimationHomepageComponent', () => {
  let component: AnimationHomepageComponent;
  let fixture: ComponentFixture<AnimationHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
