import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsTicketComponent } from './concerts-ticket.component';

describe('ConcertsTicketComponent', () => {
  let component: ConcertsTicketComponent;
  let fixture: ComponentFixture<ConcertsTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcertsTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertsTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
