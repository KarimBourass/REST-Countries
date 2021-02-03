import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RESTCountries';
  isDarkTheme: boolean = false;


  themTogled() {
    console.log('clikaaa');

    if (!this.isDarkTheme) {
      this.isDarkTheme = !this.isDarkTheme;
      console.log('FROM POPO its daark'+this.isDarkTheme);
      
    }
    else{
      this.isDarkTheme = !this.isDarkTheme;
      console.log('FROM POPO its Liiiiht'+this.isDarkTheme);

    }

  }
}
