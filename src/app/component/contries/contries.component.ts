import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
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
  contries: string[]= ['Africa','America','Asia','Europe','Oceania']


  constructor(private contriesService:CountriesService) { }

  ngOnInit(){
    this.contries$ = this.contriesService.getContries();
    
  }

  selected(event: MatSelectChange) {
    this.contries$ = this.contriesService.getContriesByRegion(event.value);
  }
  
  searchContry(contryForm: any) {
    this.contries$ = this.contriesService.getContriesByname(contryForm.value.contry);
    this.contries$.subscribe(
      res => console.log('Perfect'+res),
      err => console.log('There was an error'+err)
      )
      contryForm.reset();
  }

}
