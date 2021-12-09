import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { Token } from 'src/app/inferface/model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public tokens$!: Observable<Token[]>;
  public searchGroup!: FormGroup;
  public searchResults: any = []

  constructor(
    private dataService: DataService,
    private fb: FormBuilder) { };

  ngOnInit(): void {
    this.getList();
    this.buildForm();
  }

  getList(): void {
    this.tokens$ = this.dataService.getMainPage();
  }

  buildForm(): void {
    this.searchGroup = this.fb.group({
      'searchBar': null
    })
  }

  onChanges(): void {
    this.searchGroup.get('searchBar')?.valueChanges.pipe(
      debounceTime(300),
      switchMap((value: string) =>
      this.searchResults = this.dataService.getMainPage()))
  }
}