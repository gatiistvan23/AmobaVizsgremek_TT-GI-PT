import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  race:any
  student:any

  constructor(private base:BaseService){
    this.base.getGame().subscribe(
      (res)=>{
        this.race=res
      }
    )  

  }  

  ngOnInit(): void {
    this.base.getGame().subscribe(
      (res)=>{
        this.student=res
      }
    )
  }

}
