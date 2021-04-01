import { ElementRef } from '@angular/core';
import { NgNocopyDirective } from './ng-nocopy.directive';

describe('NocopyDirective', () => {
  it('should create an instance', () => {
    const directive = new NgNocopyDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
