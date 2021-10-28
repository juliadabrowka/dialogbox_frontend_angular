import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { switchMap, takeUntil } from 'rxjs/operators'
import { Destroyer } from 'src/app/helpers/destroyer';

@Component({
  selector: 'app-serie-page',
  templateUrl: './serie-page.component.html',
  styleUrls: ['./serie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeriePageComponent extends Destroyer implements OnInit {
  public serieDetails: any = [];

  constructor(private serieService: DataService,
    private activatedRoute: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef) {
      super()
    }

  private getContent(): void {
    this.activatedRoute.params
    .pipe(switchMap((params: any) => 
      this.serieService.getSeriePage(params.slug)),
    takeUntil(this.destroy$))
    .subscribe(res => {
      this.serieDetails = res;
      this.cdr.detectChanges()
    });
  }

  ngOnInit(): void {
    this.getContent()
  }
}
