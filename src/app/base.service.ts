import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   api="https://us-central1-soterfrontend.cloudfunctions.net/api/"
   private gameSub = new BehaviorSubject<any>(null)
   idozito:any
   en:any
   student:any

  constructor(private http:HttpClient) { }
  getGame(){
    return this.gameSub
  }
  setGame(game:any){
    this.gameSub.next(game)
  }
  joinGame(){
    this.http.get(this.api+"game/join").subscribe(
      (res:any)=>{  
      this.en=res  
      this.gameSub.next(null)
      clearInterval(this.idozito)
      this.idozito=setInterval( ()=>
      {
        this.getStatus(res.gameId).subscribe(
          {
            next:(res)=>{
                this.gameSub.next({res, ...this.en})
            },
            error:(err)=>{console.log(err)}
          }
        )},500)      
      }
    )
  }

  getStatus(gameId:any){
    return this.http.get(this.api+`game/state?gameId=${gameId}`)
   
    
  }

  newStep(step:any){
    this.http.post(this.api+"game/move", step).subscribe(
      (res)=>console.log(res)
    )
  }
  setStudent(student:any){
    this.student = student
  }
}
