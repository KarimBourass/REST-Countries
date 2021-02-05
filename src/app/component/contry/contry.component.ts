import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contry } from 'src/app/shared/contry';
import { CountriesService } from 'src/app/shared/countries.service';

@Component({
  selector: 'app-contry',
  templateUrl: './contry.component.html',
  styleUrls: ['./contry.component.scss']
})
export class ContryComponent implements OnInit, OnDestroy {

  contryName: string = 'Morocco';
  private sub: any;
  contry$: Observable<Contry[]> | undefined;


  constructor(private route: ActivatedRoute, private contriesService: CountriesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contryName = params['name'];
      console.log('Contry name===>' + this.contryName);
    });

    this.contry$ = this.contriesService.getContriesByName(this.contryName);
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
