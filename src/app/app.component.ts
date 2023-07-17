import { Component } from '@angular/core';
import { timeout } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newName: string = '';
  names: string[] = [];
  noTeams: number | "" = "";
  teams: string [][] = [];
  messege: string= "";

  addName(){
    if(this.newName === ""){
      alert("Name Cannot be EMPTY!")
    } else {
      this.names.push(this.newName);
      this.newName = "";
    }
    //console.log(this.names);
    }
  onInput(name: string){
    
    this.newName = name;
  }
  teamInput(num: number | ""){
    this.noTeams = num;
    
  }
  addTeam(){
    
    if(this.noTeams === ""){
      alert("Not a Valid Team Number");
    } else if(this.noTeams>this.names.length){
      alert("Not a Valid Team Number: Number of teams is greater than the pool of available members");
    }else{
      while(this.names.length){
        for(let i =0; i < this.noTeams; i++){
          const random = Math.floor(Math.random()*this.names.length);
          const cur = this.names.splice(random,1)[0];
          if(cur === undefined){break;}
          if(this.teams[i]){
            this.teams[i].push(cur);
          } else {
            this.teams[i]= [cur];
          }
        }
      }
      
    }
    console.log(this.teams);
    this.noTeams = "";

    this.messege = "Success! \n Your teams were generated. View them below";

  }

  reset(){
    this.messege="";
    this.names=[];
    this.newName="";
    this.noTeams="";
    this.teams=[];
  }

}


