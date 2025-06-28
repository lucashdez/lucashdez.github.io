import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiChar } from './ansi-char';

describe('AnsiChar', () => {
  let component: AnsiChar;
  let fixture: ComponentFixture<AnsiChar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiChar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsiChar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
