import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask-fone',
  templateUrl: './mask-fone.component.html',
  styleUrls: ['./mask-fone.component.css']
})
export class MaskFoneComponent implements OnInit {

  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  getDescInput() {
    return `<input glFone  type="text" >`;
  }

  getDescPipe() {
    return `{{ value | glFone }}`;
  }
}
