import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashTagsComponent } from './hash-tags.component';

describe('HashTagsComponent', () => {
  let component: HashTagsComponent;
  let fixture: ComponentFixture<HashTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
