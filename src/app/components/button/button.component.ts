import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter()
  @Input() text: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClick.emit();
  }

}
