import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortyComponent } from './components/morty/morty.component';
import { RickComponent } from './components/rick/rick.component';

const routes: Routes = [
  {
    path: '',
    component: RickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickandmortyRoutingModule { }
