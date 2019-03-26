import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { getRenderedText } from '@angular/core/src/render3';




@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
 
  nom: string ='cherif';
  prenom: string ='laaguidi';
  isDisplay:boolean=true;
  isHidden:boolean= true;
  handleClick() {
   
      this.isHidden = !this.isHidden;
      
    }
    formations:Array<Formation> = [];

  formation:Formation = new Formation('Module Angular','tres bon formation ');
  formationJS:Formation;
  getFullName() :string {
    return `Function: ${this.nom} + ${this.prenom} `
    }

    getColorByElement(isFirst:boolean = false , isLast:boolean=false) {
      
      return isFirst ? 'red' : 'green' ;
      }

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular','sdhsdfj'),
      new Formation('Module JavaScript','gffth'),
      new Formation('Module TypeScript','fgdftyf'),
      ]
    setTimeout(() => {
    this.formationJS= new Formation('Module JavaScript','sar');
    }, 3000)
   
    setInterval(() => {
      this.isDisplay = !this.isDisplay;
      }, 1000)
    }

    
   

}
