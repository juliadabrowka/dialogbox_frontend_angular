import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Serie } from 'src/app/inferface/model';

@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.scss']
})
export class ActivePageComponent implements OnInit {
  serie$!: Observable<Serie[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.serie$ = this.dataService.getActivePage()
  }
}
