import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataService } from 'src/app/data.service';
import { Token } from 'src/app/inferface/model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  tokens$!: Observable<Token[]>;

  constructor(private dataService: DataService) { };

  ngOnInit(): void {
    this.tokens$ = this.dataService.getMainPage()
    }
  }