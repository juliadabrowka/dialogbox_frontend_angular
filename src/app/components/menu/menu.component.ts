import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  series: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getActivePage().subscribe( data => {
      this.series = data
    })
  }

}
