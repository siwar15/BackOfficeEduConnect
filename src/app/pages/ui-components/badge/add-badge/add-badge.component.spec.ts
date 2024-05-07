import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBadgeComponent } from './add-badge.component';

describe('AddBadgeComponent', () => {
  let component: AddBadgeComponent;
  let fixture: ComponentFixture<AddBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
