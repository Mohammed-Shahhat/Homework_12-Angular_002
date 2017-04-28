import {
  Directive,
  ElementRef,
  Renderer2,
  Input, OnInit
} from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  @Input() myvisibility: boolean;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    console.log(this.myvisibility);
    if (this.myvisibility) {
      this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
    }
  }

}
