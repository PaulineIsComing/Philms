import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresDetailComponent } from './genres-detail.component';

describe('GenresDetailComponent', () => {
  let component: GenresDetailComponent;
  let fixture: ComponentFixture<GenresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
