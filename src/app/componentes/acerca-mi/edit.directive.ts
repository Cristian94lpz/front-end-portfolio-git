import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective {

  constructor(private el:ElementRef) {
    
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.color('orange');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.color('white');
  }
  
  private color(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
