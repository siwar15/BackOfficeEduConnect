import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOneQsComponent } from './top-one-qs.component';

describe('TopOneQsComponent', () => {
  let component: TopOneQsComponent;
  let fixture: ComponentFixture<TopOneQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOneQsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOneQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
