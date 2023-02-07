import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NNotesService } from 'src/app/shared/n-notes.service';
import { Note } from 'src/app/shared/note.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  constructor(private notesService: NNotesService, private router: Router) { }

  ngOnInit(): void {
    this.note= new Note();
  }

  onSubmit(form: NgForm) {
    //save the note

    this.notesService.add(form.value);
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
