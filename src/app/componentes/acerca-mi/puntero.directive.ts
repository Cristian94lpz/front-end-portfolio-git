import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPuntero]'
})
export class PunteroDirective {

  constructor(private el:ElementRef) {
    
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.color('black');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.color('white');
  }
  
  private color(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
