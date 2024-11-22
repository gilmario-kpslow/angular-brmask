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
  @Input() exemploValue = "01234567890123456789";
  constructor() { }

  ngOnInit(): void {
  }

  getDescPipe() {
    return `{{ value | glmask: '${this.maskType}' }}`;
  }

  getDescInput() {
    return `<input glMascara formato="${this.maskType}" type="text" >`;
  }

  is(value: string) {
    return this.maskType === value;
  }



}
