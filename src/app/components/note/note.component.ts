import { Component } from '@angular/core';

@Component({
  selector: 'mind-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  title = 'Trip';
  description = 'search info';
}
