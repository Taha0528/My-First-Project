import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }
  public addClasses:string='text-family'

  public isfamily:boolean=true;
  public isTextDanger:boolean=true;
  public isUpper:boolean=true;   
  public isDivError:boolean=false;

  public manage_Class=
  {
    "text-uppercase":this.isUpper,
    "text-family":this.isfamily,
    "text-danger":this.isTextDanger,
    "div-error":this.isDivError,

  }

  ngOnInit() {
  }

}
