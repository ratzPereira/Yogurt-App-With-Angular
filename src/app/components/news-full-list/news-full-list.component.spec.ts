import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFullListComponent } from './news-full-list.component';

describe('NewsFullListComponent', () => {
  let component: NewsFullListComponent;
  let fixture: ComponentFixture<NewsFullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
