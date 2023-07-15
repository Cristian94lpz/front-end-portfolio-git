import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appEditnegro]'
})
export class EditnegroDirective {

  constructor(private el:ElementRef) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
   this.color('orange');
 }
 
 @HostListener('mouseleave') onMouseLeave() {
   this.color('black');
 }
 
 private color(color: string) {
   this.el.nativeElement.style.color = color;
 }

}
