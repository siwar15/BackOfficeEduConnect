import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichercompetitionComponent } from './affichercompetition.component';

describe('AffichercompetitionComponent', () => {
  let component: AffichercompetitionComponent;
  let fixture: ComponentFixture<AffichercompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichercompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichercompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
