import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayroomsComponent } from './displayrooms.component';

describe('DisplayroomsComponent', () => {
  let component: DisplayroomsComponent;
  let fixture: ComponentFixture<DisplayroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
