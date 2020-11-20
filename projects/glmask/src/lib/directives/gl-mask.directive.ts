import { Directive, Renderer2, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatar } from '../pipes/mask-functions';
import { Formato } from '../pipes/formato.consts';

@Directive({
    selector: '[glMascara]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => GlMASKDirective),
        multi: true,
    }],
})
export class GlMASKDirective implements ControlValueAccessor {

    onChange = (_: any) => { };
    onTouch = () => { };
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    @Input() formato: string;
    @Input() outroFormato: string;
    @Input() alternar: Function;
    @HostListener('input', ['$event'])
    oninput(event: Event) {
        const value = this.elementRef.nativeElement.value;
        this.elementRef.nativeElement.value = this._applyMask(value.split(/\D+/).join(''));
        this.onChange(this.elementRef.nativeElement.value.split(/\D+/).join(''));
        this.onTouch();
        event.preventDefault();
        event.stopPropagation();
    }

    @HostListener('blur')
    onblur() {
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

    public setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
            this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
    }

    private _applyMask(valor: string) {
        if(this.outroFormato && this.alternar && this.alternar(valor)) {
            return formatar(Formato[this.outroFormato], valor);
        }
        return formatar(Formato[this.formato], valor);
    }

}
