import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastBoardsComponent } from './past-boards.component';

describe('PastBoardsComponent', () => {
  let component: PastBoardsComponent;
  let fixture: ComponentFixture<PastBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
