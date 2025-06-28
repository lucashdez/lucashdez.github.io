import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnsiChar } from '../ansi-char/ansi-char.component';

@Component({
  selector: 'ansi-table-ordered',
  imports: [AnsiChar],
  templateUrl: './ansi-table-ordered.html',
  styleUrl: './ansi-table-ordered.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnsiTableOrdered {
  codes: number[] = [];

  constructor() {
    for(let i = 0; i < 256; ++i) {
      this.codes.push(i);
    }
  }

}
