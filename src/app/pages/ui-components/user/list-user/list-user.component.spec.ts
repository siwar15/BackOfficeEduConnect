import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ListBadgeComponent} from "../../Badge/list-badge/list-badge.component";

describe('ListBadgeComponent', () => {
  let component: ListBadgeComponent;
  let fixture: ComponentFixture<ListBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
