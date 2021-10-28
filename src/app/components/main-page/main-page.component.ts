import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{
  tokens: any = [];

  constructor(private dataService: DataService) { };

  ngOnInit(): void {
    this.dataService.getMainPage().subscribe(res =>
      this.tokens = res
    )}
  }