import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
/**
 * author: Fahad Allibdi
 * email: fa88hd@gmail.com
 * a directive to prevent any copy event from this element
 */

@Directive({
  selector: '[noCopy]'
})
export class NgNocopyDirective {


  @Output() copyAttempted = new EventEmitter();

  constructor(private el: ElementRef) {
    this.preventSelect();
  }

  /**
   * prevent user from selected the content by css rules
   */
  private preventSelect() {
    const el = this.el.nativeElement as HTMLElement;
    el.setAttribute('style', `
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  `);
  }

  @HostListener('copy')
  async onCopy() {
    try {
      if (navigator.clipboard) {
        // override what text copied.
        await navigator.clipboard.writeText('');
      }
    } catch (error) {
      console.error('onCopy', error)
    } finally {
      this.copyAttempted.emit();
    }
  }


}
