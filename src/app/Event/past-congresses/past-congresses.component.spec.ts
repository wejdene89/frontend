import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCongressesComponent } from './past-congresses.component';

describe('PastCongressesComponent', () => {
  let component: PastCongressesComponent;
  let fixture: ComponentFixture<PastCongressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastCongressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCongressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
