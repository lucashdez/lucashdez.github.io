import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnsiTableOrdered } from './ansi-table-ordered/ansi-table-ordered.component' ;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnsiTableOrdered],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ansi_table';
}
