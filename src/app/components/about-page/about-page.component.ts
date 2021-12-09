import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';
  terms: boolean = false;
  selection:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sendMess(formValue: NgForm) {
    console.log(formValue.value)
  }

  resetForm(formValue: NgForm){
    formValue.reset()
  }

}
