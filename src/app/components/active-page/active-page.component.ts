import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.scss']
})
export class ActivePageComponent implements OnInit {
  public serie: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getActivePage().subscribe(res => {
      this.serie = res;
  })
}
}
