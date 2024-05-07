import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditercompetitionComponent } from './editercompetition.component';

describe('EditercompetitionComponent', () => {
  let component: EditercompetitionComponent;
  let fixture: ComponentFixture<EditercompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditercompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditercompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
