import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunGraphComponent } from './commun-graph.component';

describe('CommunGraphComponent', () => {
  let component: CommunGraphComponent;
  let fixture: ComponentFixture<CommunGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
