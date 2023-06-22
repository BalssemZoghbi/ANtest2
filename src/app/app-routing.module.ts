import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';

const routes: Routes = [
  {
    path: 'player',
    component: HomeComponent ,
  },
  // {
  //   path:"player/:id",
  //   component:DetailsProductComponent,
  // },
  {
    path: 'addplayer',
    component: AddJoueurComponent,
  },
//   { path: 'update/:id',
//   component: UpdateProductComponent
//  },
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
