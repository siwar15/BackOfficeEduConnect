import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeListComponent } from './Prize-list.component';

describe('PrizeListComponent', () => {
  let component: PrizeListComponent;
  let fixture: ComponentFixture<PrizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
