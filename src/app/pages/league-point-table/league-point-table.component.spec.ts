import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePointTableComponent } from './league-point-table.component';

describe('LeaguePointTableComponent', () => {
  let component: LeaguePointTableComponent;
  let fixture: ComponentFixture<LeaguePointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguePointTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaguePointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
