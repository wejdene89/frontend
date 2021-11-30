import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCountriesComponent } from './member-countries.component';

describe('MemberCountriesComponent', () => {
  let component: MemberCountriesComponent;
  let fixture: ComponentFixture<MemberCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
