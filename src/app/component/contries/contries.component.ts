import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contry } from 'src/app/shared/contry';
import { CountriesService } from 'src/app/shared/countries.service';

@Component({
  selector: 'app-contries',
  templateUrl: './contries.component.html',
  styleUrls: ['./contries.component.scss']
})
export class ContriesComponent implements OnInit {

  contries$: Observable<Contry[]> | undefined;
  contries: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']


  constructor(private contriesService: CountriesService, private route: Router) { }

  ngOnInit() {
    this.contries$ = this.contriesService.getContries();

  }

  selected(event: MatSelectChange) {
    this.contries$ = this.contriesService.getContriesByRegion(event.value);
  }

  searchContry(contryForm: any) {
    this.route.navigate(['/contries', contryForm.value.contry]);
    contryForm.reset();
  }

}
