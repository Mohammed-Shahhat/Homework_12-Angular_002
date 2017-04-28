import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    // renderer.setStyle()
  }

}
