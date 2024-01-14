import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { PannieComponent } from './pannie/pannie.component';

const routes: Routes = [
   {path: '', component: HomeComponent ,pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'produit', component:HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'pannier',component:PannieComponent},
  {path: '**' ,  redirectTo :  'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
