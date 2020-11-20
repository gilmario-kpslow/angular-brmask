import { Component, Input, OnInit, ViewChild, Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mask-exemplo',
  templateUrl: './mask-exemplo.component.html',
  styleUrls: ['./mask-exemplo.component.css']
})
export class MaskExemploComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  @Input() titulo: string;
  @Input() maskType: string;
  value: string;
  @Input() exemploValue="01234567890123456789";
  @Input() maskParams: any[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.maskParams)
  }

  getDescPipe() {
    return `{{ value | glmask: '${this.maskType}' }}`;
  }

  getDescInput() {
    if(this.maskParams) {
      return `<input glMascara formato="${this.maskType}" type="text" outroFormato="${this.maskParams[0]}" alternar="${this.maskParams[1].name}">`;
    } else {
      return `<input glMascara formato="${this.maskType}" type="text" >`;
    }
  }

  getDescPipeParams() {
    return `{{ value | glmask: '${this.maskType}': ${this.maskParams[0]} : ${this.maskParams[1].name} }}`;
  }

  getDescFunction() {
    return `${this.maskParams[1]}`;
  }

  is(value: string) {
    return this.maskType === value;
  }

 

}
