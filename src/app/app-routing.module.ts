import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';
import { GameComponent } from './game/game.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  {path:"init", component:InitComponent},
  {path:"game", component:GameComponent},
  {path:"race", component:RaceComponent},
  {path:"", redirectTo:"init", pathMatch:"full"},
  {path:"**", redirectTo:"init", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
