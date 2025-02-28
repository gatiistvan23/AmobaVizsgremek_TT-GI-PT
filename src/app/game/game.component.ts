import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  game:any={}

  constructor(private base:BaseService){
    this.base.getGame().subscribe(
      (res)=>{
        this.game = res;
      }
    )    
  }
  lepes(x:any, y:any){
    if (!this.game.res.winner)
    {
      let body ={
        gameId:this.game.res.gameId,
        playerId:this.game.playerId,
        x:x,
        y:y
      }
      console.log(body)
      this.base.newStep(body)
    }
  }
}
