import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatar, selecionarFormato } from '../pipes/mask-functions';

@Directive({
  selector: '[glMascaraCPF]',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlCPFDirective),
      multi: true,
  }],
})
export class GlCPFDirective implements ControlValueAccessor {

  onChange = (_: any) => { };
  onTouch = () => { };
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}


  @HostListener('input', ['$event'])
  oninput(event: Event): void {
      const value = this.elementRef.nativeElement.value;
      this.elementRef.nativeElement.value = this._applyMask(value.split(/\D+/).join(''));
      this.onChange(this.elementRef.nativeElement.value.split(/\D+/).join(''));
      this.onTouch();
      event.preventDefault();
      event.stopPropagation();
  }

  @HostListener('blur')
  onblur(): void {
      this.onTouch();
  }

  public writeValue(inputValue: string): void {
      if (inputValue) {
          this.elementRef.nativeElement.value = this._applyMask(inputValue);
      } else {
          this.elementRef.nativeElement.value = '';
      }
  }

  public registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
      this.onTouch = fn;
  }

  // public setDisabledState(isDisabled: boolean): void {
  //     if (isDisabled) {
  //         this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
  //     } else {
  //         this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
  //     }
  // }

  private _applyMask(valor: string): string {
    return formatar(selecionarFormato('CPF').mascara, valor);
  }

}
