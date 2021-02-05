import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContriesComponent } from './component/contries/contries.component';
import { ContryComponent } from './component/contry/contry.component';

const routes: Routes = [
  { path:'contries',component: ContriesComponent},
  { path:'contries/:name',component: ContryComponent},
  { path:'',redirectTo:'contries',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
