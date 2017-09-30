import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
    @Input('myHighlight') repos: number;

    constructor(private el: ElementRef) {}

    ngOnInit(){
      if (this.repos > 2) {
        this.el.nativeElement.style.color = '#cc0000';
      }
    }
}
