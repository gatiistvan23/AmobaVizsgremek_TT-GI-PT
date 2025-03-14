import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  race:any
  student:any

  constructor(private base:BaseService, private router:Router){
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
  reset(){
    this.base.getGame().subscribe(
      (res)=>{
        this.race = res
      }
    )
  }
  getStudent(): any {
    this.base.getGame().subscribe(
      (res)=>{
        this.getStudent().subscribe(
          (res:any)=>{
            this.student=res
          }
          )
        }
      )
      this.router.navigate(['/race'])
  } 

}
