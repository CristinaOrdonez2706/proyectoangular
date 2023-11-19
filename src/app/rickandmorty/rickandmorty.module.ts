import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { MortyComponent } from './components/morty/morty.component';
import { RickComponent } from './components/rick/rick.component';
import { HttpClientModule } from '@angular/common/http'
import { RickService } from './services/rick.service';
import { MaterialModule } from '../material/material.module';
import { DialogoComponent } from './component/dialogo/dialogo.component';

@NgModule({
  declarations: [
    MortyComponent,
    RickComponent,
    DialogoComponent
  ],
  imports: [
    CommonModule,
    RickandmortyRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [RickService]
})
export class RickandmortyModule { }
