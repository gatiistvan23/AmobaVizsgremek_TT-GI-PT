import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {
  en:any
  game:any
  constructor(private base:BaseService, private router:Router) {
    this.base.getGame().subscribe(
      (res)=> {
        if (res) this.router.navigate(['/game'])
      }
    )
  }
  init(){
    this.base.joinGame()
  }
}
