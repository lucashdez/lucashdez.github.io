import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiTableOrdered } from './ansi-table-ordered';

describe('AnsiTableOrdered', () => {
  let component: AnsiTableOrdered;
  let fixture: ComponentFixture<AnsiTableOrdered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiTableOrdered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsiTableOrdered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
