import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkTheme: boolean = false;
  themeIcon = ''
  theme = '';
  @Output() themTogled: EventEmitter<number> =   new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.themeIcon ='wb_sunny';
    this.theme = 'Light Mode';

  }

  toggleTheme() {
    this.themTogled.emit();
    console.log('clikaaa');

    if (!this.isDarkTheme) {
      this.theme = 'Dark Mode';
      this.isDarkTheme = !this.isDarkTheme;
      this.themeIcon = 'dark_mode';
      
    }
    else{
      this.theme = 'Light Mode';
      this.isDarkTheme = !this.isDarkTheme;
      this.themeIcon = 'wb_sunny'

    }

  }

}
