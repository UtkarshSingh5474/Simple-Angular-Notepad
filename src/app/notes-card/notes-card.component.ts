import { Component, OnInit, ViewChild, ElementRef, Renderer2, asNativeElements, Input } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator', { static: true })
  truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true })
  bodyText!: ElementRef<HTMLElement>;
 


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //work out if there is a text overflow and if not, hide truncator

    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is a text overflow, show fadeout truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      // else there is no textoverflow, hide fadeout truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  

}
