import { Directive, Renderer2, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { aplicarFormatacao, foneFormat } from '../pipes/mask-functions';
import { Formato } from '../pipes/formato.consts';

@Directive({
    selector: '[glCpfCnpj]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => GlCpfCnpjDirective),
        multi: true,
    }],
})
export class GlCpfCnpjDirective implements ControlValueAccessor {

    onChange = (_: any) => { };
    onTouch = () => { };
    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    @HostListener('input', ['$event'])
    oninput(event: Event) {
        const value = this.elementRef.nativeElement.value;
        this.elementRef.nativeElement.value = this._applyMask(value.split(/[^A-Za-z0-9]+/).join(''));
        this.onChange(this.elementRef.nativeElement.value.split(/[^A-Za-z0-9]/).join(''));
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
        if (valor && valor.length <= 11) {
            return aplicarFormatacao(valor, Formato.CPF);
        }
        return aplicarFormatacao(valor, Formato.CNPJA);
    }

}
