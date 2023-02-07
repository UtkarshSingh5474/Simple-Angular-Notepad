import { Component, OnInit } from '@angular/core';
import { NNotesService } from 'src/app/shared/n-notes.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private notesService: NNotesService) { }

  ngOnInit(): void {
     //want to retrieve all notes from NNotesService
    this.notes = this.notesService.getAll();
  }

}
